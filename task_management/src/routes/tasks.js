const express = require('express');
const router = express.Router();

// Dummy data for tasks
const tasks = [
  { id: 1, title: "Complete project report", completed: false, priority: "high", createdAt: new Date() },
  { id: 2, title: "Buy groceries", completed: true, priority: "low", createdAt: new Date() },
  { id: 3, title: "Read Node.js documentation", completed: false, priority: "medium", createdAt: new Date() },
  { id: 4, title: "Clean workspace", completed: true, priority: "low", createdAt: new Date() },
  { id: 5, title: "Plan next week tasks", completed: false, priority: "high", createdAt: new Date() }
];

// ✅ GET /tasks → return all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// ✅ GET /tasks/:id → return one task by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // If not a number, we’ll add special handling later
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

module.exports = router;
