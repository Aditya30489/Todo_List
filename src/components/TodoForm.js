import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addItem }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(inputValue);
    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className='row'>
        <input type="text" className='p-2 for col-8' placeholder="Enter Todos" value={inputValue} onChange={handleChange} aria-label="Enter Todos" ></input>
        <div className='col-1'></div>
        <div className='row justify-content-center col-3'>
          <button type="submit" className="btn btn-success addItemButton">
            Add Item
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
