# Fit2Me 
![alt text](https://raw.githubusercontent.com/gigimscarborough/Fit2Me/main/frontend/src/assets/images/fit2me.png)
### Fit2Me 
Fit2Me is a web application that allows fitness seekers to connect with trainers in their area at outdoor or home locations. Please visit [our website](https://fit2me.herokuapp.com/) to try it out.

## Background and Overview
In the post CoronaVirus era many of us are still practicing social distancing and are having difficulty finding space and or equipment to workout freely. A healthy excercise routine is an integral part of many of our lives that is severely lacking during this pandemic. Fit2Me aims to accomodate the needs of its users by creating a platform where fitness seeker can not only connect with trainers but choose a location where the feel most safe and comfortable as well as sourcing the various workout equipment available to them.

Objectives:
* Build a database that contains information about trainers and trainees

* Construct a web application where trainees can meet schedule workouts with trainers

* Allow users to search and tailor design a workout based on available equipment, trainer experience, and client satisfaction rating.

## Functionality & MVP

* Trainees authentication and splash page with login and sign up buttons.

* Trainees can search for trainers based on location equipment or trainer ratings and workout specialties

* Trainers will have profile pages listing their location, experience level, average client satisfaction, workout specialties, reviews, and a link to book a workout 

* Trainees can schedule a workout with a selected trainer by filling out a form with available time and date dropdowns and workout type

* After a workout a trainee can leave a satifaction rating and review that will be displayed on a trainers profile page.

## Technologies & Challenges

* Fit2Me is constructed primarily with the MERN stack (MongoDB, Express, React, and Node)

* MongoDB/Express: Needed to store and fetch various attributes of users and trainers. The biggest challenge will be organizing and indexing properly so search queries can be efficient

* React/Node: Using them to display our application. Challenge will be to ensure that there are no dead links and that users can easily reserve a trainer

## Group Members & Work Breakdown

Gigi Scarborough, Hojung Cha, Ralles Liu, Daniel Giovinazzo

Day 1 -Feb 1st.
* User Auth - User can create new account and log in with an existing account. - Daniel
* Float - Ralles
* Splash page styling. - Hojung
* Login page/sign in page. - Gigi


Day 2 - Feb 2nd.
* Search Page/Trainer Index - Gigi
* Trainer Show - Hojung
* Assiting with queries and forms- Ralles
* Trainers Schema and Search Controller- Daniel

Day 3 - Feb 3rd.
* Reservation Schema and joins association- Daniel
* Trainer Reservation Form - Hojung
* Reservation Styling and Search Styling - Gigi
* Building Reviews/Ratings Schema

Day 4 = Feb 4th
* Joins Associations for Reviews/Ratings - Daniel
* Finishing  up back end - Ralles
* Styling the Reviews/Rating - Gigi
* Integrating Reviews and Ratings into the Search - Hojung

Day 5 - Feb 5th
* Additional Styling - Team 
