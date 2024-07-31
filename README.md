# Social Media App

This project is a full-stack social media web application 🌐 that has been developed using the MERN stack 🖥️ and Rest API 🚀, In this social media platform where you can share posts, like/unlike posts, Follow/Unfollow users and more.

Deployed link : https://social-media-app-cbw8.onrender.com

## Notes App with MongoDB, Express, React & Nodejs (MERN).

- [Key Features](#key-features)
- [Technologies used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
- [Configuration and Setup](#configuration-and-setup)
- [📸 Screenshots](#screenshots)
- [Author](#author)

## Key Features

- Register and Login users
- Posts
  - Create Post : Posts include text(caption) and image
  - Delete Posts
  - Like/Unlike Post
  - Comment to a Post
  - View all comments on a post
- Realtime Messaging
  - Dark and Light Mode
  - Chat App With Image Support
  - Seen/Unseen Status for Messages
  - Notification sounds
  - Search for Chat
- user suggestions menu
- Profile Pages
  - Change profile picture
  - Change Name, email , password
  - Follow/Unfollow Users
  - Freeze Your Account
  - Add your own bio
- profile page shows user details and posts with following and followers menu
- password is stored in database in encrypted format with salt
- Dark Mode Support in Chat Page

## Technologies used

This project was created using the following technologies.

#### Frontend

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface

#### Backend

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [Nodemon](https://www.npmjs.com/package/nodemon) - an auto-refresh the server on code change
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [concurrently](https://www.npmjs.com/package/concurrently) - allow coders to run multiple scripts with one command
- [cloudinary](https://www.npmjs.com/package/cloudinary) - Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimizations to delivery
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - The cookie-parser middleware simplifies the process of parsing and managing cookies in ExpressJS applications, providing developers with convenient access to client-side cookies for various purposes, including session management and security
- [socket.io](https://www.npmjs.com/package/socket.io) - Socket.IO enables real-time bidirectional event-based communication

#### Database

- [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.

## Configuration and Setup

### Setup .env file

```shell
PORT=...
MONGO_URI=...
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

```

### Installation

```shell
Install dependencies for server
npm install

Install dependencies for client
cd client
npm install

Run the client & server with concurrently
npm run dev

Run the Express server only
npm run server

Run the React client only
npm run client

Server runs on http://localhost:5000 and client on http://localhost:3000
```

## Screenshots

#### Login

![2  login](https://github.com/monika163/Social-Media-App/assets/61625011/a547effb-5bd8-43e6-a4d4-5f6528902edb)

---

#### Sign Up

![1  register](https://github.com/monika163/Social-Media-App/assets/61625011/ef683b40-3f2c-4a88-97af-c2787ae9243b)

---

#### Home Page

![3  home page](https://github.com/monika163/Social-Media-App/assets/61625011/76e8f702-b487-45fa-8611-ef0ebd3e4283)

---

#### Post

![4  post](https://github.com/monika163/Social-Media-App/assets/61625011/991f5d71-7e90-4307-88cf-0e6479b6844b)

---

#### Post Like, Comment

![5  post like comment](https://github.com/monika163/Social-Media-App/assets/61625011/2c8fa9f9-4d62-4fb9-a911-da075e0d3b95)

---

#### Profile

![6  profile](https://github.com/monika163/Social-Media-App/assets/61625011/c895b9ff-3398-4290-9e63-ae9709cea67f)

---

#### Update Profile

![7  update profile](https://github.com/monika163/Social-Media-App/assets/61625011/910f44d4-2a12-4dca-ac1e-06572694ed31)

---

#### 8. Search for Chats and Nothification

![8  search for chats and nothification](https://github.com/monika163/Social-Media-App/assets/61625011/4b43b0a7-99ca-4a1b-a625-0519b7d0a75f)

---

#### Chat

![9  chat](https://github.com/monika163/Social-Media-App/assets/61625011/456c9304-70c7-4e62-b69e-8ef00266438f)

---

#### Profile Follow

![10  profile - follow ](https://github.com/monika163/Social-Media-App/assets/61625011/3409263c-5518-47d6-ad01-a90b5b74672a)

---

#### Profile UnFollow

![11  unfollow](https://github.com/monika163/Social-Media-App/assets/61625011/4a5a7448-856c-4588-b498-06548e80187a)

---

## Author

- Portfolio: [monika163](----)
- Github: [monika163](https://github.com/monika163)
- Linkedin: [monika163](https://www.linkedin.com/in/monika-dewangan-78a427149/)
