const express = require('express');
const app = express();
const port = 3001;

// Import tasks routes
const taskRoutes = require('./routes/tasks');

// Middleware (in case you add JSON body parsing later)
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// ✅ Mount routes
app.use('/tasks', taskRoutes);

// ✅ /health route
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
