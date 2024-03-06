  import React from 'react';
  import TodoListItem1 from './TodoListItem1';

  const todoList = [
    {
      objectID: 1,
      title: "Create a repo on GitHub"
    },
    {
      objectID: 2,
      title: "Create the todo application"
    },
    {
      objectID: 3,
      title: "Complete assigment"
    }
  ];
  
  const TodoList = () => {
    
    return (
      <div>
        <ul>
        {todoList.map(todo => (
            <TodoListItem1 key={todo.id} todo={todo} />
        ))}
        </ul>

      </div>
    );
  };



  export default TodoList;