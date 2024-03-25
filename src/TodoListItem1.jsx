import React from 'react';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const handleRemoveClick = () => {
    onRemoveTodo(todo.id); // Call onRemoveTodo with the todo id
  };

  return (
    <li>
      {todo.title} 
      <button onClick={handleRemoveClick}>Remove</button> {/* Add Remove button */}
    </li>
  );
};

export default TodoListItem;
