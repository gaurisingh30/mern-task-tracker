import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, loading, onEdit, onDelete }) {
  if (loading) {
    return <div className="loading">Loading tasks...</div>;
  }

  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks found. Add your first task above!</div>;
  }

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <div className="tasks-container">
        {tasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;