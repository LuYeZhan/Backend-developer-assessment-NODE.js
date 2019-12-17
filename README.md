# Project Name

Insurance company app

## Description

This is an app to test my node.js knowledge. We are gonna take information off an WEB API, render the information in the backend with handlebar, create a REST API server, and implement authentication and authorization.

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when it's an internal error so that I know that is not my fault
- **Get user data filtered by user id** - As a user or admin I can get user's data filtered by user id
- **Get user data filtered by username** - As a user or admin I can access to user's data filtered by user name
- **Get all insurance policies list** - As an user I want to see all the policies linked to a username
- **Get policies details** - As an admin I want to see the insurance policy details

## API Endpints:

Api entry point: https://localhost:3000/api

| HTTP Method |       URL       | Request Body | Success status |         Error Status          |                                                                                                        Description |
| ----------- | :-------------: | :----------: | :------------: | :---------------------------: | -----------------------------------------------------------------------------------------------------------------: |
| POST        |   /api/login    |   {email}    |      200       |              400              |                                check if the email is in the data received from external API. If it is, save token. |
| POST        |   /api/logout   |     200      |      400       | Clear cookie. Logout of user. |
| GET         |  /api/users/id  |     {id}     |      200       |              404              |                           Check if there is an existing token and get the user's data by the id passed in the body |
| GET         | /api/users/name |    {name}    |      200       |              404              |                               Check if there is an existing token and get user data by username passed in the body |
| GET         |  /users/policy  |  {policyId}  |      200       |              404              |      Check if there is an existing token and if the logged in user is an admin. Get the user data linked to policy |
| GET         | /policies/:name |    {name}    |      200       |              404              | Check if there is an existing token and if the logged in user is an admin. Get all the policies linked to username |

## Devstacks

Node.Js , Express.

## Installation & demo instruction

After forking or cloning the repository

cd nameofthefolder

npm install

npm run start

Once on the home page. You'll need a user id to access to the user dashboard, or an admin id to access to the admin's dashboard.

Here are one of each:
user id: a3b8d425-2b60-4ad7-becc-bedf2ef860bd
admin id: e8fd159b-57c4-4d36-9bd7-a59ca13057bb

On the user's dashboard in order to search user's you'll need an user id to search by id and an user name to search by name.

Here's some examples you can test:

user id: a74c83c5-e271-4ecf-a429-d47af952cfd4 , 55601290-8619-4f54-b831-9c6c26c52b44
user name: Jerry , Dina, Thelma, Pamela

On the admin's dasboard in order to search user's you'll need an user id to search by id and an user name to search by name. To search by policy you'll need a policy id to search by id, and a policy user name to search by name.

Here's some examples you can test:

user id: 162db393-55ef-4b2c-988d-17ba7c606785 , f382dce9-8152-49ba-ba54-9a7f90a8a332
user name: Doreen , Baxter, Allen, Spears
policy by name: Manning , Britney
policy by policy number: 64cceef9-3a01-49ae-a23b-3761b604800b , 56b415d6-53ee-4481-994f-4bffa47b5239

Here's a working Demo link.

[Deploy Link](https://insurance-node-app.herokuapp.com/)

## Kanban

I've used the kanban methodology to have in mind, what I should focus my attention to, and which is the next step.

Here's a foto of my Kanban on this project.

![Photo](public/images/IMG_4721.jpg)

## Backlog

Patterns
Unit Test's
Integration Test's

I tried to learn design patterns, unit testing and integration tests. I realized that the implementation of those would take much more than I anticipated. If I had 2-3 days more I am confident that I can get all my functions with unit test and integrations tests, with Mocha.

## Main learnings & struggles

Doing this project I've consolidated my knowledge in node.js. Specially on using and comparing multiply information from an API.

I sttrugled on the policy gets, I haven't noticed until late, that most of the policy numbers belongs to the same person. Every time I searched for a different policy number, the same person pop up, I thought I had an error on my code, it took me a long time to realize, that most of the policies belongs to the same person.

I didn't accomplish the testing part of the exercise, I missjudged the difficulty of testing the code. It is really one of the hardest tasks to accomplish as a developer.
