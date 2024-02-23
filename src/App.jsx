import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

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
]

function App() {
  

  return (
    
      <div>
        <h1>Todo list</h1>
       
      
      <hr/>

      <ul>
        {todoList.map(function(item) {
          return (
            <li key={item.objectID}>{item.title}</li>
          )
        })}
      </ul>
      </div> 
  )
}

export default App
