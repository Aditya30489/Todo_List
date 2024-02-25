import React, { useState } from 'react';
import './TodoItem.css'


function TodoItem({ index, item, toggleComplete, removeItem }) {

  const [showApplause, setShowApplause] = useState(false);

  const handleClick = () => {
    toggleComplete(index);
    setShowApplause(true);
    setTimeout(() => {
      setShowApplause(false);
    }, 5000);
  };



  return (
    <div className={`singleTodoItem ${item.completed ? 'completed' : ''}`} >
        <div className='row'>
            <div className='col-8'>
                <strong>{item.text}</strong>
            </div>
            <div className='col-4'>
                {!item.completed && (
                  <button type='button' className="btn btn-outline-success markCompleteTodoItem" onClick={handleClick}>
                    <strong>✓</strong>
                  </button>
                )}
                {item.completed &&(
                      <button type='button' className="btn btn-outline-danger removeTodoItem" onClick={() => removeItem(index)}>
                      Close
                      </button>
                )}
                
            </div>
        </div>
        {showApplause && (
        <div className="applause-container">
          <div className="applause applause-1">👏</div>
          <div className="applause applause-2">👏</div>
          <div className="applause applause-3">👏</div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
