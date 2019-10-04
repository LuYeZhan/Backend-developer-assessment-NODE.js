# Project Name

Insurance company app

## Description

This is an app to test my node.js knowledge. We are gonna take information off an API, render the information in the backend with handlebar, create a REST API server, and implement authentication and authorization. 
 
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when it's an internal error so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about, and the policies I can access to
- **Get user data filtered by user id** - As a user or admin I can get user's data filtered by id. 
- **Get user data filtered by username** - As a user or admin I can access to user's data filtered by username-
- **Get all insurance policies list** - As an user I want to see all the policies linked to a username.
- **Get policies details** - As an admin I want to see the insurance policy details


## ROUTES:

- GET / 
  - redirects to /home if user logged in
  - renders the landing page 
- GET /userbyid
  - renders user data filtered by user id
- GET /userbyusername
  - renders user data filtered by username
- GET /policiesbyusername (only admin)
  - renders lists of policies linked to a username
- GET /policiesbynumber (only admin)
  - renders user linked to a policy number


## Models

## Policies model

```

id: {
  type: String
},
amountInsured {
  type: Number
},
email: {
  type: String
},
inceptionDate: {
  type: String
},
installmentPayment: {
  type: Boolean
},
clientId: {
  type: String
}

## User model
 
```
id: {
  type: String,
  unique: true,
},
name: {
  type: String,
},
email : {
  type: String,
},
role: {
  type: String
}

## Links


### Trello


### Git

The url to your repository and to your deployed project

[Repository Link](http://github.com)

[Deploy Link](http://heroku.com)
