import { useState } from "react";

const App = () => {
  const [value, setVelue] = useState(0)
  const incrementCount = () => {
    setVelue(value + 1)
    console.log('Count:', value)
  }
  const decrementCount = () => {
    setVelue(value - 1)
    console.log('Count:', value)
  }
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  )
}

export default App