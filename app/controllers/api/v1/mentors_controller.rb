class Api::V1::MentorsController < ApplicationController
  # before_action :set_author, only: %i[show update destroy]

  # GET /mentors
  def index
    @mentors = Mentor.all
    render json: @mentors
  end

  # GET /mentors/1
  def show
    @mentor = Mentor.find(params[:id])
    render json: @mentor
  end

  # create /mentors/1
  def create; end
end
