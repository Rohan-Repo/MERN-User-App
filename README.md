# MERN-User-App

A simple full-stack MERN (MongoDB, Express, React, Node.js) application demonstrating basic user management.

## Overview

MERN-User-App serves as an introductory project showcasing how to build a user management system with a React front-end, Express/Node.js back-end, and MongoDB database. It includes RESTful API endpoints to perform CRUD operations on user data.

## Features

- List all users stored in the MongoDB database
- Add new users via API POST requests
- Front-end interface built with React
- Easily test API endpoints using Postman or ThunderClient

## Repository Structure

- `Client-FE/` - React front-end source code
- `Server-BE/` - Express.js backend source code

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB server running locally or remotely

### Installation

1. Clone this repository:
git clone https://github.com/Rohan-Repo/MERN-User-App.git

2. Start the backend server:
cd Server-BE
npm install
npm start

3. Start the frontend application:
cd Client-FE
npm install
npm start


4. Open the React app at `http://localhost:3000` and the backend API runs at `http://localhost:3001`.

## API Endpoints

- `GET /getUsers` - Retrieve all users
- `POST /createUser` - Create a new user by sending JSON data

## Usage

Test API endpoints with tools like Postman or ThunderClient. Use the React front-end to interact with the server and manage users.

## License

This project is open source and available for learning.
