import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addValue=()=>{
   setCounter( counter+1)
    console.log(counter);
  }
  const removeValue = function(){
    if(counter>0)
    {
      setCounter(counter-1)
    }else{
      alert("below zero not allowed")
    }
  }
  return (
    <>
        <h1>chai aur react</h1>
        <h2>counter value :{counter}</h2>
        <button onClick={addValue}>Add value</button>
        <button onClick={removeValue}>remove value  </button>
    </>
  )
}

export default App
