# 📝 Task Manager - MERN Stack Application

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

A full-stack Task Management application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create, read, update, and delete tasks with additional features like status filtering, priority levels, and due date management.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Configuration](#-environment-configuration)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Application Architecture](#-application-architecture)
- [Usage Guide](#-usage-guide)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Core Functionality
- ✅ **Create Tasks** - Add new tasks with title, description, priority, and due date
- ✅ **View Tasks** - Display all tasks in a responsive grid layout
- ✅ **Update Tasks** - Edit existing task details
- ✅ **Delete Tasks** - Remove tasks with confirmation
- ✅ **Filter Tasks** - Filter by status (Pending, In Progress, Completed)

### Task Properties
- **Title** - Required field (max 100 characters)
- **Description** - Optional field (max 500 characters)
- **Status** - Enum: `pending`, `in-progress`, `completed`
- **Priority** - Enum: `low`, `medium`, `high`
- **Due Date** - Optional date field
- **Timestamps** - Automatic `createdAt` and `updatedAt` tracking

### Additional Features
- 🎨 Modern, responsive UI with gradient design
- 🔍 Client-side and server-side validation
- ⚡ Real-time updates without page refresh
- 🎯 Priority-based color coding
- 📅 Date formatting and display
- 🚨 Comprehensive error handling
- 💾 RESTful API architecture

---

## 🛠 Tech Stack

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 14+ | JavaScript runtime |
| Express.js | 4.18+ | Web framework |
| MongoDB | 4.4+ | NoSQL database |
| Mongoose | 8.0+ | MongoDB ODM |
| dotenv | 16.3+ | Environment variables |
| cors | 2.8+ | Cross-Origin Resource Sharing |
| express-validator | 7.0+ | Request validation |

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2+ | UI library |
| React Scripts | 5.0+ | Build tooling |
| Axios | 1.6+ | HTTP client |
| CSS3 | - | Styling |

### Development Tools
- **nodemon** - Auto-restart server during development
- **npm** - Package management

---

## 📁 Project Structure

```
task-manager/
│
├── backend/                      # Backend server code
│   ├── config/                   # Configuration files
│   │   └── db.js                # MongoDB connection setup
│   │
│   ├── models/                   # Mongoose schemas
│   │   └── Task.js              # Task model definition
│   │
│   ├── routes/                   # API routes
│   │   └── tasks.js             # Task CRUD endpoints
│   │
│   ├── middleware/               # Custom middleware
│   │   └── errorHandler.js      # Global error handling
│   │
│   ├── .env                      # Environment variables (create this)
│   ├── .env.example             # Environment template
│   ├── .gitignore               # Git ignore rules
│   ├── package.json             # Backend dependencies
│   └── server.js                # Application entry point
│
├── frontend/                     # React frontend code
│   ├── public/                   # Static files
│   │   └── index.html           # HTML template
│   │
│   ├── src/                      # Source code
│   │   ├── components/          # React components
│   │   │   ├── TaskForm.jsx     # Task creation/edit form
│   │   │   ├── TaskForm.css     # Form styles
│   │   │   ├── TaskList.jsx     # Task list container
│   │   │   ├── TaskList.css     # List styles
│   │   │   ├── TaskItem.jsx     # Individual task card
│   │   │   └── TaskItem.css     # Card styles
│   │   │
│   │   ├── services/            # API services
│   │   │   └── api.js           # Axios HTTP client
│   │   │
│   │   ├── App.jsx              # Main App component
│   │   ├── App.css              # App styles
│   │   ├── index.js             # React entry point
│   │   └── index.css            # Global styles
│   │
│   ├── .env                      # Environment variables (create this)
│   ├── .env.example             # Environment template
│   ├── .gitignore               # Git ignore rules
│   └── package.json             # Frontend dependencies
│
├── docs/                         # Documentation
│   ├── API.md                   # API documentation
│   ├── ARCHITECTURE.md          # Architecture details
│   └── COMMENTS.md              # Code comments guide
│
└── README.md                     # This file
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v14.0.0 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **MongoDB** (v4.4 or higher)
   - **Option A - Local Installation:**
     - Download from [mongodb.com](https://www.mongodb.com/try/download/community)
     - Start MongoDB: `mongod`
   
   - **Option B - MongoDB Atlas (Cloud):**
     - Create free account at [mongodb.com/atlas](https://www.mongodb.com/atlas)
     - Create a cluster and get connection string

4. **Git** (optional, for version control)
   - Download from [git-scm.com](https://git-scm.com/)

---

## 🚀 Installation

### Step 1: Clone or Download the Project

```bash
# If using Git
git clone <repository-url>
cd task-manager

# Or download and extract the ZIP file
```

### Step 2: Install Backend Dependencies

```bash
# Navigate to backend directory
cd backend

# Install all dependencies
npm install

# Expected packages installed:
# - express
# - mongoose
# - dotenv
# - cors
# - express-validator
# - nodemon (dev dependency)
```

### Step 3: Install Frontend Dependencies

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install all dependencies
npm install

# Expected packages installed:
# - react
# - react-dom
# - react-scripts
# - axios
```

---

## ⚙️ Environment Configuration

### Backend Environment Setup

1. Navigate to the `backend` directory
2. Create a `.env` file (copy from `.env.example`)

```bash
cd backend
cp .env.example .env
```

3. Edit `.env` with your configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
# Option 1: Local MongoDB
MONGODB_URI=mongodb://localhost:27017/taskmanager

# Option 2: MongoDB Atlas (replace with your connection string)
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/taskmanager?retryWrites=true&w=majority
```

**Important MongoDB Atlas Setup:**
If using MongoDB Atlas, follow these steps:
1. Create a cluster in MongoDB Atlas
2. Create a database user with password
3. Whitelist your IP address (or use 0.0.0.0/0 for development)
4. Get your connection string and replace `<username>` and `<password>`

### Frontend Environment Setup

1. Navigate to the `frontend` directory
2. Create a `.env` file (copy from `.env.example`)

```bash
cd frontend
cp .env.example .env
```

3. Edit `.env` with your configuration:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api
```

**Note:** React environment variables must start with `REACT_APP_`

---

## 🏃 Running the Application

### Development Mode (Recommended)

You'll need **two separate terminal windows/tabs**:

#### Terminal 1 - Backend Server

```bash
# Navigate to backend directory
cd backend

# Start the development server with auto-reload
npm run dev

# You should see:
# Server is running on port 5000
# Environment: development
# MongoDB Connected: localhost
```

The backend will run on: `http://localhost:5000`

#### Terminal 2 - Frontend Development Server

```bash
# Navigate to frontend directory
cd frontend

# Start the React development server
npm start

# Browser will automatically open to http://localhost:3000
```

The frontend will run on: `http://localhost:3000`

### Production Mode

#### Backend

```bash
cd backend

# Update .env
NODE_ENV=production

# Start server
npm start
```

#### Frontend

```bash
cd frontend

# Build production bundle
npm run build

# The optimized files will be in the 'build' folder
# Deploy this folder to a static hosting service
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints Overview

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/tasks` | Get all tasks | No |
| GET | `/tasks/:id` | Get single task | No |
| POST | `/tasks` | Create new task | No |
| PUT | `/tasks/:id` | Update task | No |
| DELETE | `/tasks/:id` | Delete task | No |
| GET | `/health` | Health check | No |

### Detailed Endpoint Documentation

#### 1. Get All Tasks

```http
GET /api/tasks
```

**Query Parameters:**
- `status` (optional) - Filter by status: `pending`, `in-progress`, or `completed`

**Example Request:**
```bash
# Get all tasks
curl http://localhost:5000/api/tasks

# Get only pending tasks
curl http://localhost:5000/api/tasks?status=pending
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Complete project documentation",
      "description": "Write comprehensive README and API docs",
      "status": "in-progress",
      "priority": "high",
      "dueDate": "2024-12-31T00:00:00.000Z",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-16T14:20:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439012",
      "title": "Review pull requests",
      "description": "Review and merge pending PRs",
      "status": "pending",
      "priority": "medium",
      "dueDate": "2024-12-20T00:00:00.000Z",
      "createdAt": "2024-01-14T09:00:00.000Z",
      "updatedAt": "2024-01-14T09:00:00.000Z"
    }
  ]
}
```

---

#### 2. Get Single Task

```http
GET /api/tasks/:id
```

**URL Parameters:**
- `id` (required) - MongoDB ObjectId of the task

**Example Request:**
```bash
curl http://localhost:5000/api/tasks/507f1f77bcf86cd799439011
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API docs",
    "status": "in-progress",
    "priority": "high",
    "dueDate": "2024-12-31T00:00:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-16T14:20:00.000Z"
  }
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "error": "Task not found"
}
```

---

#### 3. Create New Task

```http
POST /api/tasks
```

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs",
  "status": "pending",
  "priority": "high",
  "dueDate": "2024-12-31"
}
```

**Field Validation:**
- `title` - **Required**, string, max 100 characters
- `description` - Optional, string, max 500 characters
- `status` - Optional, enum: [`pending`, `in-progress`, `completed`], default: `pending`
- `priority` - Optional, enum: [`low`, `medium`, `high`], default: `medium`
- `dueDate` - Optional, valid ISO date string

**Example Request:**
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API docs",
    "status": "pending",
    "priority": "high",
    "dueDate": "2024-12-31"
  }'
```

**Success Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API docs",
    "status": "pending",
    "priority": "high",
    "dueDate": "2024-12-31T00:00:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "errors": [
    {
      "msg": "Title is required",
      "param": "title",
      "location": "body"
    }
  ]
}
```

---

#### 4. Update Task

```http
PUT /api/tasks/:id
```

**URL Parameters:**
- `id` (required) - MongoDB ObjectId of the task

**Request Body:** (all fields optional, only send fields to update)
```json
{
  "title": "Updated task title",
  "status": "completed",
  "priority": "low"
}
```

**Example Request:**
```bash
curl -X PUT http://localhost:5000/api/tasks/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Complete project documentation",
    "description": "Write comprehensive README and API docs",
    "status": "completed",
    "priority": "high",
    "dueDate": "2024-12-31T00:00:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-16T15:45:00.000Z"
  }
}
```

---

#### 5. Delete Task

```http
DELETE /api/tasks/:id
```

**URL Parameters:**
- `id` (required) - MongoDB ObjectId of the task

**Example Request:**
```bash
curl -X DELETE http://localhost:5000/api/tasks/507f1f77bcf86cd799439011
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {},
  "message": "Task deleted successfully"
}
```

**Error Response (404 Not Found):**
```json
{
  "success": false,
  "error": "Task not found"
}
```

---

#### 6. Health Check

```http
GET /api/health
```

**Example Request:**
```bash
curl http://localhost:5000/api/health
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Task Manager API is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

### HTTP Status Codes

| Status Code | Meaning | When Used |
|-------------|---------|-----------|
| 200 | OK | Successful GET, PUT, DELETE |
| 201 | Created | Successful POST |
| 400 | Bad Request | Validation errors, invalid data |
| 404 | Not Found | Resource doesn't exist |
| 500 | Internal Server Error | Server-side errors |

---

## 🏗 Application Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │           React Frontend (Port 3000)                 │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐          │   │
│  │  │   App    │  │   Task   │  │   Task   │          │   │
│  │  │Component │→ │   Form   │  │   List   │          │   │
│  │  └──────────┘  └──────────┘  └──────────┘          │   │
│  │       ↓                                              │   │
│  │  ┌──────────────────────────────────┐               │   │
│  │  │      API Service (Axios)         │               │   │
│  │  └──────────────────────────────────┘               │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ HTTP/REST
┌─────────────────────────────────────────────────────────────┐
│                        SERVER LAYER                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │         Express Server (Port 5000)                   │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐          │   │
│  │  │  CORS    │→ │  JSON    │→ │  Routes  │          │   │
│  │  │Middleware│  │ Parser   │  │ /api/*   │          │   │
│  │  └──────────┘  └──────────┘  └──────────┘          │   │
│  │                      ↓                               │   │
│  │  ┌────────────────────────────────────┐             │   │
│  │  │     Task Routes & Controllers      │             │   │
│  │  │  • GET /tasks                      │             │   │
│  │  │  • POST /tasks                     │             │   │
│  │  │  • PUT /tasks/:id                  │             │   │
│  │  │  • DELETE /tasks/:id               │             │   │
│  │  └────────────────────────────────────┘             │   │
│  │                      ↓                               │   │
│  │  ┌────────────────────────────────────┐             │   │
│  │  │     Validation Middleware          │             │   │
│  │  │   (express-validator)              │             │   │
│  │  └────────────────────────────────────┘             │   │
│  │                      ↓                               │   │
│  │  ┌────────────────────────────────────┐             │   │
│  │  │       Mongoose Models              │             │   │
│  │  │      (Task Schema)                 │             │   │
│  │  └────────────────────────────────────┘             │   │
│  │                      ↓                               │   │
│  │  ┌────────────────────────────────────┐             │   │
│  │  │      Error Handler Middleware      │             │   │
│  │  └────────────────────────────────────┘             │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ MongoDB Protocol
┌─────────────────────────────────────────────────────────────┐
│                       DATABASE LAYER                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │         MongoDB Database (Port 27017)                │   │
│  │  ┌──────────────────────────────────┐               │   │
│  │  │    taskmanager (Database)        │               │   │
│  │  │  ┌────────────────────────────┐  │               │   │
│  │  │  │  tasks (Collection)        │  │               │   │
│  │  │  │  • _id                     │  │               │   │
│  │  │  │  • title                   │  │               │   │
│  │  │  │  • description             │  │               │   │
│  │  │  │  • status                  │  │               │   │
│  │  │  │  • priority                │  │               │   │
│  │  │  │  • dueDate                 │  │               │   │
│  │  │  │  • createdAt               │  │               │   │
│  │  │  │  • updatedAt               │  │               │   │
│  │  │  └────────────────────────────┘  │               │   │
│  │  └──────────────────────────────────┘               │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Request Flow Example

**Creating a New Task:**

1. User fills form in `TaskForm.jsx` and clicks "Add Task"
2. `handleSubmit()` calls `createTask()` from `api.js`
3. Axios sends POST request to `http://localhost:5000/api/tasks`
4. Express server receives request, applies CORS and JSON parsing
5. Request routes to `POST /api/tasks` handler in `routes/tasks.js`
6. Validation middleware checks data using `express-validator`
7. If valid, `Task.create()` saves to MongoDB via Mongoose
8. MongoDB returns saved document with generated `_id`
9. Success response sent back through Express
10. Frontend receives response, updates state, re-renders UI
11. New task appears in the task list

**Error Scenario:**
- If validation fails at step 6, error response sent immediately
- If MongoDB error at step 8, error handler catches and formats response
- Frontend displays error message to user

---

## 📖 Usage Guide

### For End Users

#### Creating a Task

1. Fill in the "Add New Task" form at the top
2. **Required:** Enter a task title
3. **Optional:** Add description, select status, priority, and due date
4. Click "Add Task" button
5. Task appears in the list below

#### Editing a Task

1. Find the task you want to edit in the list
2. Click the "✏️ Edit" button on the task card
3. Form populates with current task data
4. Modify any fields you want to change
5. Click "Update Task" button
6. Click "Cancel" to discard changes

#### Deleting a Task

1. Find the task you want to delete
2. Click the "🗑️ Delete" button
3. Confirm deletion in the popup dialog
4. Task is permanently removed

#### Filtering Tasks

1. Use the "Filter by Status" dropdown above the task list
2. Select: All Tasks, Pending, In Progress, or Completed
3. List updates to show only matching tasks

### For Developers

#### Adding a New Field to Tasks

1. **Update Backend Model** (`backend/models/Task.js`):
   ```javascript
   assignedTo: {
     type: String,
     trim: true
   }
   ```

2. **Update Validation** (`backend/routes/tasks.js`):
   ```javascript
   body('assignedTo')
     .optional()
     .trim()
     .isLength({ max: 50 })
   ```

3. **Update Frontend Form** (`frontend/src/components/TaskForm.jsx`):
   ```javascript
   const [formData, setFormData] = useState({
     // ... existing fields
     assignedTo: ''
   });
   ```

4. **Update UI** (`frontend/src/components/TaskItem.jsx`):
   ```javascript
   <div className="meta-item">
     <span>Assigned: {task.assignedTo || 'Unassigned'}</span>
   </div>
   ```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. MongoDB Connection Failed

**Error:** `MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017`

**Solutions:**
- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`
- For MongoDB Atlas, verify IP whitelist and credentials
- Check firewall settings

#### 2. Port Already in Use

**Error:** `Error: listen EADDRINUSE: address already in use :::5000`

**Solutions:**
```bash
# Find process using the port (Mac/Linux)
lsof -i :5000

# Kill the process
kill -9 <PID>

# Or change port in backend/.env
PORT=5001
```

#### 3. CORS Errors

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solutions:**
- Ensure backend server is running
- Check `cors` middleware is properly configured in `server.js`
- Verify `REACT_APP_API_URL` in frontend `.env`

#### 4. Module Not Found

**Error:** `Cannot find module 'express'`

**Solutions:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### 5. React App Crashes After npm audit fix

**Issue:** Running `npm audit fix --force` broke the app

**Solution:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
```

**Prevention:** Don't run `npm audit fix --force` unless you understand the implications

#### 6. Environment Variables Not Working

**Solutions:**
- Ensure `.env` file exists in correct directory
- Restart the server after changing `.env`
- Frontend variables must start with `REACT_APP_`
- Check for typos in variable names

---

## 🧪 Testing the API

### Using cURL

```bash
# Get all tasks
curl http://localhost:5000/api/tasks

# Create a task
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Task","priority":"high"}'

# Update a task
curl -X PUT http://localhost:5000/api/tasks/<task-id> \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'

# Delete a task
curl -X DELETE http://localhost:5000/api/tasks/<task-id>
```

### Using Postman

1. Download Postman from [postman.com](https://www.postman.com/)
2. Import the collection (if provided) or create requests manually
3. Set base URL: `http://localhost:5000/api`
4. Test each endpoint with different payloads

### Using Browser Console

```javascript
// GET all tasks
fetch('http://localhost:5000/api/tasks')
  .then(res => res.json())
  .then(data => console.log(data));

// POST new task
fetch('http://localhost:5000/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Browser Test Task',
    priority: 'medium'
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (not supported)

---

## 🚀 Deployment

### Backend Deployment (Heroku Example)

```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create Heroku app
heroku create task-manager-api

# Set environment variables
heroku config:set MONGODB_URI=<your-mongodb-atlas-uri>
heroku config:set NODE_ENV=production

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Frontend Deployment (Netlify Example)

1. Build the production bundle:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to Netlify:
   - Drag and drop the `build` folder to [netlify.com/drop](https://app.netlify.com/drop)
   - Or use Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod --dir=build
     ```

3. Set environment variable in Netlify dashboard:
   - `REACT_APP_API_URL=https://your-backend-url.herokuapp.com/api`

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, Node version, etc.)

### Suggesting Enhancements

1. Open an issue with tag `enhancement`
2. Describe the feature and why it's beneficial
3. Provide examples of how it would work

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Coding Standards

- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing code style
- Test your changes thoroughly
- Update documentation if needed

---

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Task Manager

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👥 Authors

- **Shakya K. Gurusinghe** - Initial work

---

## 🙏 Acknowledgments

- MongoDB documentation
- Express.js community
- React documentation
- Node.js community
- All contributors and testers

---

## 📞 Support

If you have questions or need help:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Review existing [Issues](https://github.com/your-repo/issues)
3. Create a new issue with detailed information
4. Contact: your.email@example.com

---

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Full CRUD functionality
- Task filtering by status
- Priority levels
- Due date management
- Responsive UI

### Future Roadmap
- [ ] User authentication
- [ ] Task categories/tags
- [ ] Search functionality
- [ ] Task sharing
- [ ] Email notifications
- [ ] Dark mode
- [ ] Mobile app

---

**Made with ❤️ using the MERN Stack**
