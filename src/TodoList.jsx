
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

const TodoList = () => {
  return (
    <div>
       <ul>
        {todoList.map(function(item) {
          return (
            <li key={item.objectID}>{item.title}</li>
          )
        })}
      </ul>

    </div>
  );
};



export default TodoList;
