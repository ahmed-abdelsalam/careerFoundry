module Api
  # Api json interface
  module V1
    # Apis v1
    class AgendasController < ApplicationController
      before_action :authenticate_student!, only: [:create]

      def index
        # index /api/v1/mentors/1/agendas
        @record = if request.path.include?('students')
            Student.find(params[:student_id])
          else
            Mentor.find(params[:mentor_id])
          end

        return head :not_found unless @record

        calls = @record.call
        external_list = external_mentor_calls(params[:mentor_id])
        render json: [calls.order(start_time: 'desc'), external_list].reduce([], :concat)
      end

      def show
        @record = request.path.include?('students') ? Student.find(params[:student_id]) : Mentor.find(params[:mentor_id])
        unless @record
          return render json: { message: "Couldn't find a #{request.path.include?('students') ? 'student' : 'mentor'} with this id" },
                        status: :not_found
        end

        calls = @record.call.find(params[:id])
        render json: calls.order(start_time: 'desc')
      end

      def destroy
        @record = request.path.include?('students') ? Student.find(params[:student_id]) : Mentor.find(params[:mentor_id])
        head :not_found unless @record

        begin
          calls = @record.call.find(params[:id])
          calls.destroy
          head :accepted
        rescue StandardError
          head :internal_server_error
        end
      end

      # create /mentors/1
      def create
        body = JSON.parse(request.body.read)
        @mentor = Mentor.find(params[:mentor_id])
        if @mentor && body['start_time']
          start_time = DateTime.parse(body['start_time'])
          unless start_time > DateTime.now
            return render json: { message: 'start_time field should be in the future' },
                          status: :bad_request
          end
          # head :not_acceptable unless check_available_time(start_time, params[:mentor_id])
          new_call = @mentor.call.create(start_time: start_time, reason: body['reason'], student_id: current_student.id,
                                         duration: 60)
          return render json: new_call, status: :created
        end
        head :bad_request
      rescue StandardError
        head :internal_server_error
      end

      private

      def external_mentor_calls(id)
        response = Faraday.get "#{Rails.configuration.EXT_MENTOR_CALENDAR_API}#{id}/agenda"
        body = JSON.parse(response.body)
        calls = body['calendar']
        if calls.is_a?(Array) && calls.any?
          calls.map do |r|
            { start_time: r['date_time'], mentor_id: id, student_id: nil, duration: 60 }
          end
        end
      rescue StandardError
        []
      end

      def check_available_time(start_time, id)
        data = external_mentor_calls(id)
        selection = DateTime.parse(start_time)
        data.each do |r|
          ext_reservation = DateTime.parse(r['start_time'])
          unless (ext_reservation.year == selection.year) &&
                 (ext_reservation.month == selection.month) &&
                 (ext_reservation.day == selection.day) &&
                 (ext_reservation.hour == selection.hour)
            return false
          end
        end
      rescue e
        true
      end
    end
  end
end
