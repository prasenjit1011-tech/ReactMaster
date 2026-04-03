import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Virtualization from './Virtualization'
import NotificationApp from './NotificationApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NotificationApp />
      <Virtualization />
    </>
  )
}

export default App
