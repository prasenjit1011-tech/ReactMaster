import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from './myreduxthunk'
import './App.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { user, loading, error, token } = useSelector(state => state.auth)

  const handleLogin = () => {
    dispatch(loginUser({ email, password }))
  }

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <p>Welcome {user.name} / {user.id}</p>}
      {!user && <p style={{color:'red'}}>Welcome Guest</p>}
      {token && <p style={{color:'red'}}>Token Value {token}</p>}
    </div>
  )
}

export default Login