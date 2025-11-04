const express = require('express');
const app = express();
const port = 3001;

// Dummy data for tasks
const tasks = [
  { id: 1, title: "Complete project report", completed: false, priority: "high", createdAt: new Date() },
  { id: 2, title: "Buy groceries", completed: true, priority: "low", createdAt: new Date() },
  { id: 3, title: "Read Node.js documentation", completed: false, priority: "medium", createdAt: new Date() },
  { id: 4, title: "Clean workspace", completed: true, priority: "low", createdAt: new Date() },
  { id: 5, title: "Plan next week tasks", completed: false, priority: "high", createdAt: new Date() }
];

// Default route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// GET /tasks - all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// ✅ GET /task/:id - find a task by ID
app.get('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    // if not found, return 404
    return res.status(404).json({ error: "Task not found" });
  }

  // if found, return the task
  res.json(task);
});

// GET /health - API status
app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
