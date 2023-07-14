# User Authentication and Authorization System

This project implements a user authentication and authorization system using Express.js, Passport-jwt, JWT (JSON Web Tokens), PostgreSQL, and Sequelize. The system allows users to register, login, and access protected routes using JWT for authentication.


## Installation

1. Clone the repository: `https://github.com/bhargav1sarvadhi/Sequelize_Authentication.git`
2. Install the dependencies: `npm install`

## Configuration

1. Create a PostgreSQL database.
2. Configure the database connection in the `.env` file.


## Usage

1. Start the application: `npm test`
2. Access the application at `http://localhost:3000`

## API Routes

The following routes are available:

- `POST /user`: User registration
- `POST /auth/login`: User login
- `GET /user/home`: Get user profile information (protected route)
- `PUT /user/:id`: Update user profile information (protected route)
- `DELETE /user/:id`: Delete user account (protected route)
- `GET /auth/logout`: User logout

## Dependencies

The project uses the following dependencies:

- Express.js: Web application framework
- Passport-jwt: Authentication middleware
- JWT: JSON Web Token implementation
- PostgreSQL: Database system
- Sequelize: ORM (Object-Relational Mapping) library for database management

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create a new issue or submit a pull request.






