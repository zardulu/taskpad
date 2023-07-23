// TaskList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleNewTaskChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const addTask = () => {
    if (newTaskText.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTaskText, completed: false }]);
      setNewTaskText('');
    }
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={newTaskText}
          onChange={handleNewTaskChange}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onRemove={() => removeTask(task.id)}
            onToggleComplete={() => toggleComplete(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
