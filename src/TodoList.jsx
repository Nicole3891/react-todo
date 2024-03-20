  import React from 'react';
  import TodoListItem1 from './TodoListItem1';

  //const todoList = [
    //{
     // objectID: 1,
      //title: "Create a repo on GitHub"
   // },
    //{
      //objectID: 2,
      //title: "Create the todo application"
    //},
    //{
      //objectID: 3,
      //title: "Complete assigment"
    //}
  //];
  //replaced the todoList
  const TodoList = ({ todoList })  => { //Destructure todoList from props
    
    return (
      <div>
        <ul>
        {todoList.map(todo => (
            <TodoListItem1 key={todo.id} todo={todo} /> //Pass todo as props
        ))}
        </ul>

      </div>
    );
  };



  export default TodoList;