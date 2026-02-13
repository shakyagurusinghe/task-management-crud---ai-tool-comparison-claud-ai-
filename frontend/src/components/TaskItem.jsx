import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusClass = (status) => {
    const classes = {
      'pending': 'status-pending',
      'in-progress': 'status-progress',
      'completed': 'status-completed'
    };
    return classes[status] || '';
  };

  const getPriorityClass = (priority) => {
    const classes = {
      'low': 'priority-low',
      'medium': 'priority-medium',
      'high': 'priority-high'
    };
    return classes[priority] || '';
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      'low': '🟢',
      'medium': '🟡',
      'high': '🔴'
    };
    return icons[priority] || '⚪';
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="task-badges">
          <span className={`badge ${getStatusClass(task.status)}`}>
            {task.status}
          </span>
          <span className={`badge ${getPriorityClass(task.priority)}`}>
            {getPriorityIcon(task.priority)} {task.priority}
          </span>
        </div>
      </div>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-meta">
        <div className="meta-item">
          <span className="meta-label">📅 Due:</span>
          <span className="meta-value">{formatDate(task.dueDate)}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">🕐 Created:</span>
          <span className="meta-value">{formatDate(task.createdAt)}</span>
        </div>
      </div>

      <div className="task-actions">
        <button
          onClick={() => onEdit(task)}
          className="action-btn edit-btn"
          title="Edit task"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="action-btn delete-btn"
          title="Delete task"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;