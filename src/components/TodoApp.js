import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todoItems, setTodoItems] = useState([]);

  // Function to handle adding a new todo item
  const handleAddItem = (newItemText) => {
    if (newItemText.trim() !== "") {
      setTodoItems([...todoItems, { text: newItemText, completed: false }]);
    }
  };

  // Function to handle marking a todo item as completed
  const handleToggleComplete = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].completed = !newTodoItems[index].completed;
    setTodoItems(newTodoItems);
  };

  // Function to handle removing a todo item
  const handleRemoveItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addItem={handleAddItem} />
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            item={item}
            toggleComplete={handleToggleComplete}
            removeItem={handleRemoveItem}
          />
        ))}
        
      </div>
    </div>
  );
}

export default TodoApp;
