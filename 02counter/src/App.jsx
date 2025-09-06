import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(3)
    // let counter = 3

    const addValue = () => {
      console.log("click", counter);
      
      counter = counter + 1
      setCounter(counter)
      
    }

    const removeValue = () => {
      console.log("click",counter);

      counter -= 1
      setCounter(counter)
      
    }

  return (
    <>
      <h1>Hello </h1>
      <h2>Counte Value : {counter} </h2>
      <button onClick={addValue}>
        Add Value</button>
      <br/>
      <button onClick={removeValue}>
        Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
