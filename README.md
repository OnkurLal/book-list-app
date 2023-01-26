## Book List Application

Welcome to my Book List App! This app allows the user to view, update, add, and delete books. the weather around the world searching by city. It gives the user the current weather as well as a 12 hour forecast, which also utilizes a horizontal scrolling container.

### Live - https://book-list-bkzl.onrender.com/

### How To Use

- The home page is set to display all books in the database. Below are the built in routes and the purpose they serve:
  - /update/id - Users can update book informatiom utilizing this route, id is the books ISBN number.
  - /new - Users can add a new book by going to this route and adding in all the relevant information.
  - /delete/id - Users may also delete books by going to the using this route, id is the books ISBN number.
  - /view/id - Users may see all the information on a specific book by using the books ISBN number for the id.

### How to Download

- Clone this repo
  - git clone https://github.com/OnkurLal/book-list-app
- Navigate to book-list-app
  - cd book-list-app
- Install dependencies
  - npm install
- Create a .env file and enter MongoDB Atlas credentials
- Start development server
  - node app.js

### How To Deploy -

Deploy using Render

- Login into Render with github
- Next select the repo you want to deploy
- Add enviornment variable to project on Render
- Add Render's servers IP address to whitelist on MongoDB Atlas
- After selecting Rendor will automatially deploy your website.

### Tech Stack Used

- Javascript
- NodeJS
- Express
- MongoDB Atlas
- Mongoose
