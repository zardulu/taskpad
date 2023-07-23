// TaskDetails.js
import React, { useState } from 'react';

const TaskDetails = ({ selectedTask, onAddNestedTask }) => {
  const [nestedTaskText, setNestedTaskText] = useState('');

  const handleNestedTaskChange = (event) => {
    setNestedTaskText(event.target.value);
  };

  const addNestedTask = () => {
    if (nestedTaskText.trim() !== '') {
      onAddNestedTask(selectedTask.id, nestedTaskText);
      setNestedTaskText('');
    }
  };

  return (
    <div>
      <h2>Task Details</h2>
      {selectedTask ? (
        <div>
          <h3>{selectedTask.task}</h3>
          <h4>Nested Tasks:</h4>
          <ul>
            {selectedTask.nestedTasks.map((nestedTask) => (
              <li key={nestedTask.id}>{nestedTask.text}</li>
            ))}
          </ul>
          <input
            type="text"
            value={nestedTaskText}
            onChange={handleNestedTaskChange}
            placeholder="Add a nested task..."
          />
          <button onClick={addNestedTask}>Add Nested Task</button>
        </div>
      ) : (
        <p>No task selected.</p>
      )}
    </div>
  );
};

export default TaskDetails;
