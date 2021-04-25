require 'test_helper'
# require 'rails_helper'

class CallTest < ActiveSupport::TestCase
  # setup do
  #   mentor = Mentor.create(name: 'test mentor', course: 'physics')
  #   mentor.save
  #   student = Student.create(first_name: 'test', last_name: 'mentor', email: 'a@a.com', password: 'test123')
  #   student.save
  # end
  # test "Shouldn't save without start_time" do
  #   mentor = Mentor.create(name: 'test mentor', course: 'physics')
  #   mentor.save
  #   student = Student.create(first_name: 'test', last_name: 'mentor', email: 'a@a.com', password: 'test123')
  #   student.save
  #   assert_not Call.new(start_time: nil, mentor_id: mentor.id, student_id: student.id).save
  #   # expect(call.save).to raise_error(ActiveRecord::RecordNotUnique)
  # end
  # test "Shouldn't save without user" do
  #   mentor = Mentor.create(name: 'test mentor', course: 'physics')
  #   mentor.save
  #   assert_not Call.new(start_time: DateTime.now, duration: 60, mentor_id: mentor.id).save
  #   # expect(call.save).to raise_error(ActiveRecord::RecordNotUnique)
  # end
end
