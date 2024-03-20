
    import React, { useState, useEffect } from 'react'
    import TodoList from './TodoList'
    import AddToDoForm from './AddTodoForm'

  //Custom Hook for semi-persistent state
  function useSemiPersistentState() {
    const [ todoList, setTodoList ] = useState (
      JSON.parse(localStorage.getItem('savedTodoList')) || []
      ); 
      useEffect (() => {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
      }, [todoList]);

      return [todoList, setTodoList];
  }

    function App() {

      //1.const [newTodo, setNewTodo] = useState(" "); //create a new state variable
      //2.Retrive todoList from localStorage or use an empty array if it doesn't exist
      const [ todoList, setTodoList ] = useSemiPersistentState(); //CALL THE CUSTOM HOOK
      
      const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
      };
      
      return (
        
          <>
            <h1>Todo List</h1>

    {/* Using AddToDoForm component*/}  
    <AddToDoForm  onAddTodo={addTodo}/>
    {/* Using TodoList component*/}
      <TodoList list={todoList}/> 


        
          </> 
      );
    }

    export default App;
