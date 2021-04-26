# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

# Installation

- bundle install
- yarn add
- rails db:setup
- check `config\database.yml` for setting up the database credentials - this project built using postgres
- rails s
pg
# Project Structure
## Models
- created 3 models
  - Student model which service as a devise model which need authentication system
  - Mentor model for storing mentors details
  - Call model which contains the meeting schedule details and it has a `blenogs_to` relatioship with the Mentor & the Student
## Server Side
- Copied html structure from the careerFoundry website
  - added partial templates for header and footer
  - updated devise views for sign_in, sign_up, etc ...
## Client Side
- Used React for the main pages which only render after authentication
  - react pages all under the parent link /app served by `react-router`
  - create three main pages 
    - `/app/mentors` for selecting a mentor and schedule a meeting with him
    - `/app/agenda` for indexing all the scheduled meetings for my cuurent account
    - `/app/calendar` the main page for creating new meeting and show reserved meetings 

## Endpoints
- created namespace /api/v1 to serve json content for the react app
- merged data coming from the external api with the meetings saved locally to show all reserved time slots for each mentor
- CRUD operations for the meetings with taking consideration of deleting only future meeting
- When a meeting created it can't be created again

# TODO
- refine the testing suite
- enhance front end amd styling
- use RVM

* Ruby version
2.7.1
* Rails version
6.0.3.6