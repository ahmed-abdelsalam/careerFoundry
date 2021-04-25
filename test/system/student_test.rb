require 'application_system_test_case'

class UserTest < ApplicationSystemTestCase
  test 'sign in' do
    user = Student.create(first_name: 'Mason', last_name: 'Price', email: 'mason.price@example.com',
                          password: 'test123', course: 'Web Development').create
    visit new_student_session_path
    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
    click_button '"Log in', options
    assert_selector 'button', text: 'logout'
  end
end
