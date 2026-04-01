import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Virtualization from './Virtualization'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Virtualization />
    </>
  )
}

export default App
