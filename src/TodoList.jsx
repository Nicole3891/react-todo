  import React from 'react';
  import TodoListItem1 from './TodoListItem1';

  
  const TodoList = ({ list, onRemoveTodo })  => { 
    
    return (
      <div>
        <ul>
        {list.map(todo => (
            <TodoListItem1 key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/> //Pass onRemoveTodo prop
        ))}
        </ul>

      </div>
    );
  };



  export default TodoList;