# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

s1 = Student.create(first_name: 'Ahmed', last_name: 'Abd El-Salam', email: 'engahmedabdelsalam918@gmail.com',
                    password: 'test123', course: 'ux-design')
s2 = Student.create(first_name: 'Mason', last_name: 'Price', email: 'mason.price@example.com',
                    password: 'test123', course: 'Web Development')
s3 = Student.create(first_name: 'Marcus', last_name: 'Adams', email: 'marcus.adams@example.com',
                    password: 'test123', course: 'Data Analytics')
m1 = Mentor.create(name: 'Max Mustermann', avatar_url: 'https://randomuser.me/api/portraits/men/22.jpg',
                   course: 'ux-design')
m2 = Mentor.create(name: 'Alyssa Baker', avatar_url: 'https://randomuser.me/api/portraits/women/75.jpg',
                   course: 'Web Development')
m3 = Mentor.create(name: 'Jerry Cunningham', avatar_url: 'https://randomuser.me/api/portraits/men/88.jpg',
                   course: 'Data Analytics')
c1 = m1.call.create(start_time: DateTime.parse('23/04/2021 8:00'), duration: 60)
c2 = m2.call.create(start_time: DateTime.parse('21/04/2021 7:00'), duration: 60)
c3 = m3.call.create(start_time: DateTime.parse('19/04/2021 2:00'), duration: 60)
c4 = m1.call.create(start_time: DateTime.parse('18/04/2021 11:00'), duration: 60)
c5 = m2.call.create(start_time: DateTime.parse('22/04/2021 23:00'), duration: 60)
s1.call << c1
s2.call << c2
s3.call << c3
s1.call << c4
s2.call << c5
