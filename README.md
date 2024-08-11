# Mern Store

a full-stack web application built to revolutionize your online shopping experience! Powered by the MERN stack (MongoDB, Express.js, React, Node.js), Redux Toolkit for smooth state management, and the visually stunning Material UI, this project offers a seamless and feature-rich platform for both users and admins.

Deployed link : https://mern-store-frontend-d5x8.onrender.com

## MERN STORE E Commerce Application with MongoDB, Express, React & Nodejs (MERN).

- [Key Features](#key-features)
- [Technologies used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
- [Configuration and Setup](#configuration-and-setup)
- [📸 Screenshots](#screenshots)
- [Author](#author)

## Key Features

- User Registration : Allows users to register as Customers.
- Full-Featured Shopping Cart : Seamless shopping cart functionality for users to add, remove, and manage products.
- Top Products Carousel : Display a carousel of top-rated or featured products.
- Product Pagination : Navigate through products efficiently with pagination.
- Product Search : offers a search functionality where customers can find products by
  color, size, price, availability.
- Product Search Feature : Easily search for products based on keywords.
- User Profile with Orders : Users can create profiles and track their order.
- Admin Dashboard : Comprehensive dashboard for administrators to manage products, and orders.
- Admin Admin Management : Manage admin accounts.
- Admin Product Management : Add, and delete products from the platform.
- Admin Order Details Page : Access detailed information about each order.
- Mark Orders as Delivered Option : Ability to update order status to Confirm, Shipped, delivered.
- Cart System : Customers can add products to their cart for easy checkout.
- Checkout Process : Seamless checkout with options for shipping and payment methods.
- Shipping Options : Specify shipping area for product delivery
- Saved Addresses : Save multiple shipping addresses
- Integration: Secure payment processing through Razorpay.

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
- [razorpay] - Payment integration
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) - jsdoc enables you to integrate Swagger using JSDoc comments in your code
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger. json file
  razorpay -

#### Database

- [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.

## Configuration and Setup

### Setup .env file

```shell
PORT = 5454
MONGO_URI = ADD_YOUR_MONGO_URI_HERE
SECERET_KEY = ADD_YOUR_JWT_SECRET_HERE
apikey = ADD_YOUT_RAZORPAY_KEY_ID
apisecret = ADD_YOUR_RAZORPAY_KEY_SECRET

```

### Installation

```shell
Install dependencies for frontend
npm install

Install dependencies for backend
npm install

Run the frontend and backend with concurrently
npm run dev

Run the Express backend only
npm start

Run the React frontend only
npm start

Backend runs on http://localhost:5454 and frontend on http://localhost:3000
```

## Screenshots

#### Register

![1 register](https://github.com/user-attachments/assets/231a3663-44c5-4bec-a542-b3c258e5db8e)

---

#### Login

![2 login](https://github.com/user-attachments/assets/da7bdd99-1093-4d84-b309-6d78572f05c5)

---

#### Carousel

![3 Carousel](https://github.com/user-attachments/assets/1e52dd34-1a78-436d-b103-4c7639ec2927)

---

#### Category

![4 category](https://github.com/user-attachments/assets/82449ac7-261c-4187-88c1-fe37b7ffbc89)

---

#### Product

![5 product](https://github.com/user-attachments/assets/34a31b5c-476f-465c-b96b-3f3ecd45da72)

---

#### Product Details

![6 product-details](https://github.com/user-attachments/assets/0ec735b9-8d1b-4c41-a805-9c4e44d0a26f)

---

#### Add to Cart

![7 add to cart](https://github.com/user-attachments/assets/38d0083b-8ee5-441d-989f-f624a26162fd)

---

#### Checkout

![8 checkout](https://github.com/user-attachments/assets/849edbb6-a387-48a7-82bf-79b7962e2b69)

---

#### Delivery Address

![9  delivery address](https://github.com/user-attachments/assets/173da7b6-39e2-42ba-921f-9e9dcdd3b84b)

---

#### Payment1

![10 payment6](https://github.com/user-attachments/assets/514f542b-fb9b-45b6-8ae2-f992e24c8a1e)
![10 payment7](https://github.com/user-attachments/assets/8bab21a2-683e-4abf-a12b-9e8e79bdc205)
![10 payment3](https://github.com/user-attachments/assets/6741fbc5-dcbb-489d-a725-d30c3ab9f69f)
![10  payment1](https://github.com/user-attachments/assets/fb143648-b56b-4ab5-abd8-9729c0c6357f)
![10 payment2](https://github.com/user-attachments/assets/e88c7519-39cb-45ef-9fc1-d53d6bd9ec49)
![10 payment4](https://github.com/user-attachments/assets/b85fa006-c136-42c8-bb17-70bfef57bff5)
![10 payment5](https://github.com/user-attachments/assets/f9de63ed-2bd8-44ff-907a-45bc232d8647)

---

#### Order Confirmred

![11 order-confirmred](https://github.com/user-attachments/assets/27a440a7-ef64-4101-a64e-7da9258cd858)

---

#### My Order

![12  my order](https://github.com/user-attachments/assets/c1f005cf-9179-4c54-8f6e-33f5371f3cd4)

---

#### Order Status

![13 order status](https://github.com/user-attachments/assets/072f8cd6-07cc-4c11-a195-1eb6c74e7874)

---

#### Admin Dashboard add Products

![14  admin dashboard-add products](https://github.com/user-attachments/assets/a506ad94-ee7c-41fd-9181-7c06cb794da0)

---

#### Admin Dashboard All Products

![15  admin dashboard - All Products](https://github.com/user-attachments/assets/0b863717-6502-4935-bfbc-6cc6494cc307)

---

#### Admin Dashboard All Orders

![16  admin dashboard - all orders](https://github.com/user-attachments/assets/40f85f36-ff8d-4142-acad-7344de60d9ee)

---

## Author

- Portfolio: [monika163](----)
- Github: [monika163](https://github.com/monika163)
- Linkedin: [monika163](https://www.linkedin.com/in/monika-dewangan-78a427149/)
