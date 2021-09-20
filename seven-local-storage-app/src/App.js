import React,{useState,useEffect} from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import Todos from "./Components/Todos"
import TodoForm from "./Components/TodoForm";


const App = () =>{
  const [todos,setTodos] = useState([]);

  useEffect(()=> {
    const localTodos = localStorage.getItem("todos")
    console.log({localStorage});
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  },[]); // always have to send the array, this will always run

  const addTodos = async todo => {
    setTodos([...todos,todo])
  }
  
  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]) // this will run only when there is a change in todos

  return(
    <Container fluid>
      <h1>Todo with local storage</h1>
      <Todos todos = {todos} markComplete = {markComplete}/>
      <TodoForm addTodos  = {addTodos}/>

    </Container>
  )
}

export default App;
