    import { useState } from "react";
    

    const AddToDoForm = (props) => {
      const [todoTitle, setTodoTitle] = useState("");

      //const handleChange = (event) => {
        //setTodoTitle(event.target.value)
      //}

      const handleAddTodo = (event) => {
      
        event.preventDefault(); //prevent default from submission behavior;
        const todoTitle = event.target.title.value; //retrive value of title input;
        
      console.log(todoTitle);
      props.onAddTodo(todoTitle); //INvoking onAddTodo callback prop and passing todoTitle
      
        setTodoTitle(""); //Reset the form by clearing the the text input value;
      };
      
      return (
        <div>
        <form onSubmit={handleAddTodo}> {/* Add onSubmit prop with handleAddTodo function*/}
          <label htmlFor="todoTitle">Title</label>
          <input id="todoTitle" 
          type="text" 
          name="title"
          value={todoTitle} 
          onChange={ (event) => setTodoTitle(event.target.value)}
          />
          <button type="submit">Add Todo</button>
          </form>
          </div>
      );
    };

    export default AddToDoForm;
