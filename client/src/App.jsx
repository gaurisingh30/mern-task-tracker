import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const API_URL = '/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTasks(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const response = await axios.post(API_URL, taskData);
      setTasks([response.data, ...tasks]);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add task');
    }
  };

  const handleUpdateTask = async (id, taskData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, taskData);
      setTasks(tasks.map(task => task._id === id ? response.data : task));
      setEditingTask(null);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update task');
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
        setError('');
      } catch (err) {
        setError('Failed to delete task');
      }
    }
  };

  const startEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Tracker</h1>
      </header>
      <main className="App-main">
        {error && <div className="error-message">{error}</div>}
        <TaskForm 
          onSubmit={editingTask ? (data) => handleUpdateTask(editingTask._id, data) : handleAddTask}
          editingTask={editingTask}
          onCancel={() => setEditingTask(null)}
        />
        <TaskList 
          tasks={tasks} 
          loading={loading}
          onEdit={startEdit}
          onDelete={handleDeleteTask}
        />
      </main>
    </div>
  );
}

export default App;