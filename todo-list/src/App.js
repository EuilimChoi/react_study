import { useState } from "react";

function App() {
  const [todo,settodo] = useState("");
  const [todolist, settodolist] = useState([]);
  const onchange = (e) => {settodo(e.target.value)};
  const onsubmit = (e) => {
    e.preventDefault();
    if (todo === ""){
      return
    }

    console.log(todo)
    settodolist((newtodo) =>
      [...newtodo, todo]
    )

    console.log(todolist)

    settodo("");
  };


  return (
    <div>
      <h1> My Todo list </h1>
      <h2>{todolist.length} things To do</h2>
      
      <form onSubmit={onsubmit} >
        <input type = "text" placeholder ="Need Todo today" onChange ={onchange} value = {todo}/>
        <button>Add Todo</button>
        <hr/>
        <ul>
        {todolist.map((el, idx) => <li key = {idx}>{idx},{el}</li>)}
        </ul>
      
      </form>
    </div>
  );
}

export default App;
