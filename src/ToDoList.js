import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
  const { name, tasks, handleArrowClick, handleAddTask, leftBound, rightBound, userId } = props;

  const TaskList = tasks.sort((a,b) => a.order > b.order ? 1 : -1).map((task, i) => <ToDoItem task={task} handleArrowClick={handleArrowClick} key={`task_${name}_${i}`} leftBound={leftBound} rightBound={rightBound} />);
  // create a list with header as name, toDoItems for each task
  return (
    <div style={{ flexGrow: 1, marginRight: rightBound ? '' : '25px', backgroundColor: '#fff', color: '#000' }}>
      <h1 style={{ margin: '0 0 20px 0', backgroundColor: 'purple', color: '#fff' }}>{name}</h1>
      {TaskList}
      <button style={{ backgroundColor: '#f2f2f2', color: '#000', padding: '10px', marginTop: '20px' }} onClick={() => handleAddTask(userId)}>+ Add a task</button>
    </div>
  )
};

export default ToDoList;