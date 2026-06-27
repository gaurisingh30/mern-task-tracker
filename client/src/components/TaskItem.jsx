import React from 'react';

function TaskItem({ task, onEdit, onDelete }) {
  const getStatusClass = (status) => {
    switch (status) {
      case 'completed': return 'status-completed';
      case 'in-progress': return 'status-in-progress';
      default: return 'status-pending';
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'low': return 'priority-low';
      default: return 'priority-medium';
    }
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-actions">
          <button onClick={() => onEdit(task)} className="btn-edit">Edit</button>
          <button onClick={() => onDelete(task._id)} className="btn-delete">Delete</button>
        </div>
      </div>
      
      {task.description && (
        <p className="task-description">{task.description}</p>
      )}
      
      <div className="task-meta">
        <span className={`status-badge ${getStatusClass(task.status)}`}>
          {task.status.replace('-', ' ')}
        </span>
        <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
          {task.priority} priority
        </span>
        {task.dueDate && (
          <span className="due-date">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
      
      <div className="task-dates">
        <small>Created: {new Date(task.createdAt).toLocaleDateString()}</small>
      </div>
    </div>
  );
}

export default TaskItem;