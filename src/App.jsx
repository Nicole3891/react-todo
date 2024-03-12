
  import React, { useState } from 'react'
  import TodoList from './TodoList'
  import AddToDoForm from './AddTodoForm'



  function App() {
    //const [newTodo, setNewTodo] = useState(" "); //create a new state variable
    const [ todoList, setTodoList ] = useState ([]); //Create todoList state variable;
    
    const addTodo = (newTodo) => {
      setTodoList([...todoList, newTodo]);
    };
    
    return (
      
        <div>
          <h1>Todo List</h1>

  {/* Using AddToDoForm component*/}  
  <AddToDoForm  onAddTodo={addTodo}/>
 

  {/* Using TodoList component*/}
    <TodoList todoList={todoList}/> 


      
        </div> 
    );
  }

  export default App;
