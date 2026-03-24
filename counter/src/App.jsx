import { useState } from 'react'

import './App.css'

function App() {

let [counter, setCounter]=useState(0);
const addCount=()=>{
  if(counter<20){
  setCounter(counter+1);
  }
  
}
const removeCount=()=>{
  if(counter>0){
    setCounter(counter-1);
  }else return
}
  return (
    <>
    <h1>counter is : {counter}</h1>
    <button onClick={addCount}> addCounter {counter}</button>
    <br />
    <button onClick={removeCount}>removeCounter {counter}</button>

    </>
  )
}

export default App
