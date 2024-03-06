
  import React, { useState } from 'react'
  import TodoList from './TodoList'
  import AddToDoForm from './AddTodoForm'



  function App() {
    const [newTodo, setNewTodo] = useState(" "); //create a new state variable
    
    
    
    return (
      
        <div>
          <h1>Todo List</h1>

  {/* Using AddToDoForm component*/}  
  <AddToDoForm  onAddTodo={setNewTodo}/>
  <p>{newTodo}</p>

  {/* Using TodoList component*/}
    <TodoList /> 


      
        </div> 
    );
  }

  export default App;
