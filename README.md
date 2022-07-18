# Social-Media-API

## Description
social media api supporting users, friends, thoughts and reactions. using mongoDB to house all data.

## Walkthrough Videos
Part 1: https://www.awesomescreenshot.com/video/10031139?key=35c923ace4624f3b94f73d5cbbba546f

Part 2: https://www.awesomescreenshot.com/video/10031266?key=b6016dd6aee6eaf87533209ba029d010

Part 3: https://www.awesomescreenshot.com/video/10031298?key=bda0f0751de2f7632fe5cd7c3374be7b


## Table of Contents
- [Walkthrough Videos](#walkthrough-videos)
- [Resources](#Resources)
- [Usage](#usage)
- [Credits](#credits)
      
## Resources
[Github Account](https://github.com/GrahamP98)

[Github Repository](https://github.com/GrahamP98/Social-Media-API)

[Live Site](https://GrahamP98.github.io/Social-Media-API/)

## Usage
go to github and pull the source code. run npm i to install all packages. run npm start to start server. run insomnia to mess with api routes.

API Routes
/api/users

GET all users

GET a single user by its _id and populated thought and friend data

POST a new user:

// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
PUT to update a user by its _id

DELETE to remove user by its _id

/api/users/:userId/friends/:friendId

POST to add a new friend to a user's friend list

DELETE to remove a friend from a user's friend list

/api/thoughts

GET to get all thoughts

GET to get a single thought by its _id

POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
PUT to update a thought by its _id

DELETE to remove a thought by its _id

/api/thoughts/:thoughtId/reactions

POST to create a reaction stored in a single thought's reactions array field

DELETE to pull and remove a reaction by the reaction's reactionId value

# Credits
Graham Purnell
    