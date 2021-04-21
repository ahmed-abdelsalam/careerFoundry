class HomeController < ApplicationController
  before_action :authenticate_student!, only: %i[app agenda]
  #   def index; end

  def agenda
    calls = Call.where({ student_id: current_student.id })
    render json: calls
  end
end
