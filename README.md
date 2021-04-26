# CareerFoundry Mentors
This is the tech challenge for careerFoundy back-end position.
- It's developed using ruby on rails in the back-end and a react in the front-end
- Please note that I had no prior experience in rails but I thought it will be fun to do the task in ruby on rails and I'll learn new things, and it was really great because I didn't know how much easy it's compared to other frameworks but it took me a while to wrap my head around the short-hand abstractions 😃


# Demo 
you can check online Demo on <a href="https://careerfoundry-mentor.herokuapp.com">Heruko</a>

- for quick login:
  - Email: engahmedabdelsalam918@gmail.com
  - Password: test123

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ahmed-abdelsalam/careerFoundry)

# Installation
Installing all gems
```
$ bundle install
```
Installing npm packages
```
$ yarn add
```
if creating new database  `rails db:create`  first
```
$ rails db:migrate
```
initial demo data - you can skip it if no need 
```
$ rails db:seed
```
check `config\database.yml` for setting up the database credentials or changing db driver - this project built using Postgresql

run server

```
$ rails s
```
# Project Structure
## Models
- created 3 models
  - Student model which serves as a devise model that need an authentication system
  - Mentor model for storing mentors details
  - Call model which contains the meeting schedule details and it has a `blenogs_to` relationship with the Mentor & the Student
## Server Side Rendering
- Copied HTML structure from the careerFoundry website
  - added partial templates for header and footer
  - updated devise views for sign_in, sign_up, etc ...
## Client Side Rendering
- Used React for the main pages which only render after authentication
  - react pages all under the parent link /app served by `react-router`
  - create three main pages 
    - `/app/mentors` for selecting a mentor and schedule a meeting with him
    - `/app/agenda` for indexing all the scheduled meetings for my cuurent account
    - `/app/calendar` the main page for creating new meeting and show reserved meetings 

## Endpoints
- created namespace /api/v1 to serve JSON content for the react app
- merged data coming from the external API with the meetings saved locally to show all reserved time slots for each mentor
- CRUD operations for the meetings with taking consideration of deleting only future meeting
- When a meeting created it can't be created again

# TODO
- refine the testing suite
- enhance front end and styling
- use RVM


# Configuration
* Ruby version
2.7.1
* Rails version
6.0.3.6