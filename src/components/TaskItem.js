// TaskItem.js
import React from 'react';

const TaskItem = ({ task, onRemove, onToggleComplete }) => {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={onToggleComplete}
      >
        {task.text}
      </span>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default TaskItem;
