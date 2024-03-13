  import React from 'react';

  const TodoListItem1 = ({ todo }) => { //Destructure todo from props
    //const {todo} = props.item;
    
    return (
      <li>{todo.title}</li> //Update the todo object to come from props
    );
  };

  export default TodoListItem1;