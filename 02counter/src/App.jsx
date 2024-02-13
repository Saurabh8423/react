
import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)
 
  // let counter = 15

  const addValue = ()=> {

    // console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter+1)
  }

  const removeValue =()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value:{counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button
    onClick={removeValue}
    >remove value {counter}</button>
    <p>footer: {counter}</p>
    </>

  )
}

export default App
