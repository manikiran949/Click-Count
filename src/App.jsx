import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  const incrementCounter = () => {
    counter++;
    setCounter(counter);
  }
  const decrementCounter = () => {
    counter--;
    if(counter < 0) counter = 0;
    setCounter(counter);
  }
  return (
    <>
      <h1>Welcome to ClickCount</h1>
      <h2>
        Counter = {counter}
      </h2>
      <button onClick={incrementCounter} className='operations'>
        Increment Counter
      </button>
      <br />
      <button onClick={decrementCounter} className='operations'>
        Decrement Counter
      </button>
    </>
  )
}

export default App