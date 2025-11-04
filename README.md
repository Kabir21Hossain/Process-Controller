cat <<EOF > README.md
# Task Management API

## 🚀 Setup Instructions
1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/process_controller.git
   \`\`\`
2. Navigate to the project directory:
   \`\`\`
   cd process_controller/task_management
   \`\`\`
3. Install dependencies:
   \`\`\`
   npm install
   npm install express
   \`\`\`
5. Run the server:
   \`\`\`
   node src/index.js
   \`\`\`
6. Open your browser and visit:
   \`\`\`
   http://localhost:3000
   \`\`\`

## 🌐 API Endpoints
| Method | Endpoint       | Description                 |
|---------|----------------|-----------------------------|
| GET     | /              | Root endpoint               |
| GET     | /tasks         | Get all tasks               |
| GET     | /task/:id      | Get a single task by ID     |
| GET     | /health        | Check server health status  |

EOF
