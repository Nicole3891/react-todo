  import React from 'react';

  const TodoListItem1 = (props) => {
    //const {todo} = props.item;
    
    return (
      <li>{props.todo.title}</li> //Update the todo object to come from props
    );
  };

  export default TodoListItem1;