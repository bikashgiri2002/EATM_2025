import React from 'react'
import Bmi from './components/Bmi'

const App = () => {
  return (
    <div>
      <h1 className='p-2 bg-gray-400 text-center text-xl'>Bmi Calculator</h1>
      <Bmi />
    </div>
  )
}

export default App