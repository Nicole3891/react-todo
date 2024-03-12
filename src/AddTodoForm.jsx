    import { useState } from "react";
    

    const AddToDoForm = ({ onAddTodo }) => { //destructure onAddTodo from props
      const [todoTitle, setTodoTitle] = useState("");//Create todoTitle state variable;

      //const handleChange = (event) => {
        //setTodoTitle(event.target.value)
      //}
      const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value; //retrive the input value from the event object
        setTodoTitle(newTodoTitle);//Update todoTitle state
      }

      const handleAddTodo = (event) => {
      
        event.preventDefault(); //prevent default from submission behavior;
        //const todoTitle = event.target.title.value; //retrive value of title input;
        const newTodo = {
          title: todoTitle,
          id: Date.now() //Genarete an unique identifier
        };
      //console.log(todoTitle);
      onAddTodo(newTodo); 
      
        setTodoTitle(""); //Reset todoTitle state;
      };
      
      return (
        <div>
        <form onSubmit={handleAddTodo}> {/* Add onSubmit prop with handleAddTodo function*/}
          <label htmlFor="todoTitle">Title</label>
          <input 
          id="todoTitle" 
          type="text" 
          name="title"
          value={todoTitle} //Use todoTitle state as a value prop;
          onChange={handleTitleChange}//Use handleTitleChange function for onChange prop
          //{ (event) => setTodoTitle(event.target.value)}
          />
          <button type="submit">Add Todo</button>
          </form>
          </div>
      );
    };

    export default AddToDoForm;
