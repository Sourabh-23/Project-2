Project Overview
This project is a web application that uses Node.js and MySQL to manage users, categories, and posts. It follows a RESTful API architecture, utilizing Objection.js as an ORM for database interactions and JWT for user authentication.

Key Components
Database Design:

Database: MySQL
Tables:
Users: Stores user information with unique username and email.
Categories: Contains unique category names for posts.
Posts: Stores post details linked to users and categories, with appropriate foreign key constraints.
Backend Framework:

Node.js and Express for server-side logic.
Objection.js for ORM, managing interactions with the MySQL database.
Knex.js for SQL query building.
Authentication:

Implemented JWT (JSON Web Tokens) for secure user authentication.
Middleware to protect certain routes from unauthorized access.
Controllers:

User Controller: Manages user registration, login, and CRUD operations.
Category Controller: Handles creation, retrieval, updating, and deletion of categories.
Post Controller: Manages post creation, retrieval, updating, and deletion.
Middleware:

Custom middleware to verify JWT tokens for protected routes.
Routing:

Organized routes for users, categories, and posts, separating public and protected endpoints.
Error Handling and Validation:

Input validation for user registration and category creation.
Centralized error handling in controllers for consistency.
Environment Configuration:

Used a .env file to manage environment variables like database credentials and JWT secret.
Deployment
The server is configured to run on a specified port, defaulting to 8002.
Testing and Documentation
API endpoints can be tested using tools like Postman to ensure functionality.
Future Enhancements
Error Handling: Improve error messages and handling mechanisms.
Input Validation: Implement more robust validation across all inputs.
Role-Based Access Control: Introduce roles (admin, user) for better access management.
Frontend Development: Optionally develop a frontend interface for user interaction.
API Documentation: Create detailed documentation for endpoints and usage.
