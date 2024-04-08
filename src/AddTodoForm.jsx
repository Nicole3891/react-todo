import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now()
    };
    onAddTodo(newTodo);
    setTodoTitle("");
  };
  
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel 
          id="todoTitle"
          value={todoTitle}
          onInputChange={handleTitleChange}
        >
          Title
        </InputWithLabel>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodoForm;