// src/server.js
const express = require('express');
const taskRouter = require('./routes/tasks');
const port = 3000;

const app = express();
app.use(express.json());

const tasks = [
  { id: 1, title: "Sample Task", completed: false },
  { id: 2, title: "Sample Task", completed: true },
  { id: 3, title: "Sample Task", completed: false },
  { id: 4, title: "Sample Task", completed: true },
  { id: 5, title: "Sample Task", completed: false },
];
app.locals.tasks = tasks;

app.use('/tasks', taskRouter);

app.get('/', (req, res) => {
  res.send("Task Management API is running!");
});

app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
