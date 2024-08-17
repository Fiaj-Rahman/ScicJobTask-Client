# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



This project is a Online shop project. There has a some of functionality here. 

Step 1: Setup and Basic Structure
Backend Setup:

Initialize a new Node.js project with Express and MongoDB.
Connect to MongoDB using Mongoose or directly with MongoDB client.
Create a Product schema that includes fields like name, image, description, price, category, ratings, and creation date.
Implement API endpoints:
GET /api/products: Fetch all products with pagination.
GET /api/products/search: Search products by name.
GET /api/products/filter: Filter products by category, brand, and price range.
GET /api/products/sort: Sort products by price and date added.
POST /api/products: Add dummy product data to the database.
Frontend Setup:

Create a React app.
Implement routes using react-router-dom for navigation.
Fetch product data from the backend using axios or fetch and display it on the frontend.
Create reusable components for product cards, pagination, search bar, category filters, and sort options.
Step 2: Pagination
Backend:
Implement pagination logic in the GET /api/products endpoint.
Use query parameters like page and limit to manage pagination.
Frontend:
Display page numbers and navigation buttons on the UI.
Fetch data based on the current page and limit.
Step 3: Searching
Backend:
Implement a GET /api/products/search endpoint that searches products by name.
Frontend:
Create a search bar component to input the search query.
Display search results dynamically as the user types.
Step 4: Categorization
Backend:
Implement a GET /api/products/filter endpoint that filters products by brand, category, and price range.
Frontend:
Create filter components for brand, category, and price range.
Allow users to apply multiple filters simultaneously.
Step 5: Sorting
Backend:
Implement a GET /api/products/sort endpoint that sorts products by price and date.
Frontend:
Add sorting options on the UI for price (low to high, high to low) and date added (newest first).
Step 6: Authentication
Google Authentication:
Set up Firebase in your project.
Implement Google sign-in using Firebase’s authentication module.
Email and Password Authentication:
Implement registration and login using Firebase authentication for email and password.

Features:
Product Display with Pagination, Search, Categorization, and Sorting.
Google and Email/Password Authentication using Firebase.
Responsive Design with a mobile-first approach.