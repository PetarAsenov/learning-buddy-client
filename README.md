# Learning-Buddy platform: #

 ## [Check out current version](https://learning-buddy.netlify.app/) ##

Learning-Buddy is a platform where valunteer teachers can connect with students in need and organize sessions.

## Table of contents

- [App demo](#App-demo)
- [Technology used](#technology-used)
- [Goals for this project](#goals-for-this-project)
- [User Stories and Wireframe](#user-stories-and-wireframe)
- [Git workflow](#git-workflow)
- [Server-repo](#server-repo)

## App demo ##

![screenshot1](https://user-images.githubusercontent.com/58357193/80647381-a7888880-8a6e-11ea-8c16-c8985a881445.png)

![screenshot2](https://user-images.githubusercontent.com/58357193/80647566-f8987c80-8a6e-11ea-8985-03c48743a9fc.png)

![image](https://user-images.githubusercontent.com/58357193/80647688-30072900-8a6f-11ea-90d2-9c3abb2acd88.png)

![image](https://user-images.githubusercontent.com/58357193/80647894-7fe5f000-8a6f-11ea-93ee-08bf431530b7.png)

## Technology used ##

- [React]
- [Redux]
- [Express]
  - [REST API]
- [Sequelize]
- [React-Bootstrap]

## Goals for this project ##

The goal of this project is to build a full-stack app:

- practice full-stack development
- practice learning new technology independently
- apply what we learned in the bootcamp
- showcase development approach of using wireframes and user stories
- practice disciplined [git usage](#git-workflow)

## User Stories and Wireframe ##


### User stories for this project: ###

* As a user, I would like to sign up and login as a teacher or student.

* As a user, I would like to edit my profile by including or edit picture and description.
* As a user, I would like to be a "teacher" in the platform and create my own sessions on specific topic, date and time slot.
* As a user, I would like to see the partcipants that have booked for my sessions.
* As a user, I would like to be able to register as participant for sessions (even if I am also a teacher)
* As a user, I would like to be able to search for a session by their title or filter by subject.
* As a user, I would like to have an overview in my profile between sessions I attend as a participant and I own as a teacher.
* As a user, I would like to be able to unregister for a session I booked for before it has started.
* As a user, I would like to see the upcomig sessions first, but still see the history of the past ones.
* As a user, I would like to be able to give feedback to the teachers and see the feedback that others gave.
* As a user, I would like to see a list of all teachers in the platform.
* As a user, I would like to see a list of provided subjects in the platform and sessions filter by them.

*This mvp is still a work in progress. Some features still need to be implemented and revised. If you have any suggestions, please let me know here*

### Wireframe: ###

server:

![image](https://user-images.githubusercontent.com/58357193/80648249-23370500-8a70-11ea-990a-efb354cfd33a.png)

[see client wireframes in lucidchart](https://www.lucidchart.com/documents/edit/c9b4d276-283e-48e4-a293-178b8c0ce8a3/DORPHCXR8ZbJ?shared=true)

## Git workflow

In this project I try to use:

- Good commit messages
- Well named branches
- Pull requests with summaries


## Server-repo

The server side of this project is an Express server connected to a Sequelize database. [Click here for more details](https://github.com/PetarAsenov/learning-buddy-server)