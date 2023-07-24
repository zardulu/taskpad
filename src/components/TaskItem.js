const TaskItem = ({ task, onRemove, onToggleComplete }) => {
  
  return (
    <li>
     <h3> 
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none'}}
        onClick={onToggleComplete}
      >
        {task.text}
      </span>
      
      {/*Adds buttons and icons*/}
      <button className='remove' onClick={() => onRemove(task.id)}>
      <i className="fas fa-trash"></i> 
      </button>
      <button className='complete' onClick={() => onToggleComplete(task.id)}>
      <i className="fas fa-check"></i> 
      </button>

    </h3> 
    </li>
  );
};

export default TaskItem;
