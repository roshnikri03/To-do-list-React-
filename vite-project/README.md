# React To-Do List Application

A simple, beautifully designed To-Do List application built with React and Vite.

## Features
- Add new tasks
- Mark tasks as completed
- Edit existing tasks
- Delete tasks
- Premium, dynamic styling with micro-animations

## How to Run the Application

1. **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
2. **Install Dependencies**: Open your terminal, navigate to the project directory, and run the following command to install the required dependencies:
   ```bash
   npm install
   ```
3. **Start the Development Server**: Once dependencies are installed, start the local development server by running:
   ```bash
   npm run dev
   ```
4. **View the Application**: Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

## Project Structure
- `src/App.jsx`: Main stateful component managing the list of to-dos.
- `src/components/Header.jsx`: Displays the app title and description.
- `src/components/ToDoList.jsx`: Renders the list dynamically.
- `src/components/ToDoItem.jsx`: Renders individual to-do items and handles edit/delete/complete actions.
