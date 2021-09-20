import React,{useState} from "react";
import "./App.css";

function App(){
  const[count,setCount] = useState(0) // sets the value of 0 to count
  return(
    <div>
      <header>
      <h1>Counter app using State</h1>
      </header>
      <h2>Current value of count is {count}</h2>
    <button onClick = {()=> setCount(0)}>reset counter</button>
    <button onClick = {() => count > 9 ? "" : setCount(count+1) } >increase counter</button>
    <button onClick = {() => count <= 0 ? "" : setCount(count-1) } >deccrease counter</button>
    </div>
  );
}

export default App;