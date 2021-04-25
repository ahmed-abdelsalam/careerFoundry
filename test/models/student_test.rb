require 'test_helper'

class StudentTest < ActiveSupport::TestCase
  test 'Create Student account without email' do
    student = Student.new
    assert !student.save
  end
end
