# MERN Task Tracker

A full-stack Task Tracker application built with MongoDB, Express.js, React.js, and Node.js.

## Features
- Create, Read, Update, Delete (CRUD) operations for tasks
- Form validation with error messages
- REST API endpoints
- MongoDB database integration
- Responsive UI design
- Dynamic updates without page refresh

## Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)

## Installation

### Backend Setup
```bash
npm install
```

### Frontend Setup
```bash
cd client
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```
This runs both the server (port 5000) and client (port 3000) concurrently.

### Server Only
```bash
npm start
```

### Client Only
```bash
npm run client
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get single task |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

## Deployment

### Backend (Heroku/Render/Railway)
- Set MONGO_URI environment variable
- Build command: `npm install`
- Start command: `npm start`

### Frontend (Vercel/Netlify)
- Set REACT_APP_API_URL to your backend URL
- Build command: `npm run build` (in client directory)