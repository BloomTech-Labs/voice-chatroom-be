[![Maintainability](https://api.codeclimate.com/v1/badges/5b1332f7827000a86252/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/voice-chatroom-be/maintainability) 
[![Test Coverage](https://api.codeclimate.com/v1/badges/5b1332f7827000a86252/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/voice-chatroom-be/test_coverage)

🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric.  Contributing to docs does NOT count as a PR to meet your weekly requirements.

# API Documentation

#### 1️⃣ Backend delpoyed at [🚫name service here](🚫add URL here) 

## 1️⃣ Getting started

To get the server running locally:

🚫 adjust these scripts to match your project

- Clone this repo
- **npm install** to install all required dependencies
- **npm start** to start the local server
- **npm test** to start server using testing environment

### Backend framework goes here

🚫 Why did you choose this framework?

-    Point One
-    Point Two
-    Point Three
-    Point Four

## 2️⃣ Endpoints

🚫This is a placeholder, replace the endpoints, access controll, and descriptioin to match your project

### User Routes

| Method | Endpoint                  | Access Control | Description                               |
| ------ | ------------------------- | -------------- | ----------------------------------------- |
| GET    | `/users`                  | all users      | Returns an array of all users.            |
| GET    | `/users/:Id`              | all users      | Returns information for a single user.    |  
| PUT    | `/users/:Id`              | all users      | Modify an existing user.                  |
| POST   | `/users/`                 | all users      | Add a new User.                           |
| DELETE | `/users/:Id`              | all users      | Delete a specified user.                  |

### Mentor Routes

| Method | Endpoint                  | Access Control | Description                               |
| ------ | -----------------------   | -------------- | ----------------------------------------- |
| GET    | `/mentors`                | all users      | Returns an array of all mentors.          |
| GET    | `/mentors/:Id`            | all users      | Returns information for a single mentor.  |  
| PUT    | `/mentors/:Id`            | mentors        | Modify an existing mentor.                |
| POST   | `/mentors/`               | all users      | Add a new mentor.                         |
| DELETE | `/mentors/:Id`            | mentors        | Delete a specified mentor.                |

### Category Routes

| Method | Endpoint                  | Access Control | Description                               |
| ------ | -----------------------   | -------------- | ----------------------------------------- |
| GET    | `/categories`             | all users      | Returns an array of all categories.                       
| GET    | `/categories/:Id`         | all users      | Returns information for a single category.|
| PUT    | `/categories/:Id`         | mentors        | Modify an existing category.              |
| POST   | `/categories/`            | mentors        | Add a new category.                       |
| DELETE | `/categories/:Id`         | mentors        | Delete a specified category.              |



# Data Models

🚫This is just an example. Replace this with your data model

### User Model

---

```
{
  id: increment INTEGER
  email: STRING
  given_name: STRING
  family_name: STRING
  username: STRING
  location: STRING
  interest_1: STRING
  interest_2: STRING
  interest_3: STRING
  created_at: TIMESTAMP with TIMEZONE
  avatar: BITVARYING
  isMentor: BOOLEAN
  user_bio: TEXT
  
}
```
### Mentor Model

---

```
{
  id: increment INTEGER
  mentor_id: INTEGER foreign key in USERS table
  email: STRING
  given_name: STRING
  family_name: STRING
  username: STRING
  location: STRING
  avatar: BIT VARYING
  created_at: TIMESTAMP with TIMEZONE
  mentor_name: STRING
  category_1: STRING
  category_2: STRING
  category_3: STRING
  mentor_rating: INTEGER
  mentor_bio: TEXT
  
}
```
### Category Model

---

```
{
  id: increment INTEGER
  category_name: STRING
  
}
```

 ### mentor_categories Model

---

```
{
  mentor_id: INTEGER foreign key in MENTORS table
  category_id: INTEGER foreign key in CATEGORIES table
  category_name: STRING foreign key in CATEGORIES table
  
}

```
 ### user_interests Model

---

```
{
  user_id: INTEGER foreign key in USERS table
  category_id: INTEGER foreign key in CATEGORIES table
  category_name: STRING foreign key in CATEGORIES table
  
}

```

 ### mentee_list Model

---

```
{
  user_id: INTEGER foreign key in USERS table
  mentor_id: INTEGER foreign key in MENTORS table
  mentor_name: STRING foreign key in MENTORS table
  
}

```

## 2️⃣ Actions

🚫 This is an example, replace this with the actions that pertain to your backend

## User Actions

`find()` -> Returns all users

`findById(id)` -> Returns a single user by ID

`add(user)` -> Returns the created user

`update(changes, id)` -> Update a user by ID

`remove(id)` -> Delete user by ID


## Mentor actions 

`find()` -> Returns all mentors

`findById(id)` -> Returns a single mentor by ID

`add(mentor)` -> Returns the created mentor

`update(changes, id)` -> Update a mentor by ID

`remove(id)` -> Delete mentor by ID

## Category actions 

`findCat()` -> Returns all categories

`findCatById(id)` -> Returns a single category by ID

`addCat(cat)` -> Returns the created category

`updateCat(changes, id)` -> Update a category by ID

`removeCat(id)` -> Delete category by ID



## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  stripe_secret - this is generated in the Stripe dashboard
    
## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
