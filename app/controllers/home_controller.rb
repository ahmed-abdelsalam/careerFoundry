class HomeController < ApplicationController
  before_action :authenticate_student!, only: %i[agenda]

  def agenda
    calls = Call.where(student_id: current_student.id)
    render json: calls.order(start_time: 'desc')
  end
end
