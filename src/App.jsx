import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Approuter from './Routes/Approuter'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
    <Approuter />
    </div>
  
  )
}

export default App
