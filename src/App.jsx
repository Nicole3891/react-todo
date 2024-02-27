import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TodoList from './TodoList'
import AddToDoForm from './AddTodoForm'



function App() {
  

  return (
    
      <div>
        <h1>Todo list</h1>

 {/* Using AddToDoForm component*/}  
 <AddToDoForm />

{/* Using TodoList component*/}
  <TodoList /> 

      
    
      
      <hr/>

     
      </div> 
  )
}

export default App
