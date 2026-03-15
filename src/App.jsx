import './App.css'
import { Outlet } from 'react-router-dom';
import Demo from './ReduxSaga.jsx';
import { Menu } from './components/Menu';
import { useState } from 'react';
import DemoUser from './ReduxSagaUser.jsx';
import ReduxObservable from './ReduxObservable.jsx';

export function App(){

  /** Data pass from child to parent */
  const [msg, setMsg] = useState('PL');
  const getMsg = (msg) =>{
    setMsg(msg);
  }

  return (
    <>
      <Demo />
      <DemoUser />
      <ReduxObservable />  
      <div className="container">
        <Menu getMsg={getMsg} />
        <h4>ReactJS+Vite+Redux : {msg}</h4>
        <Outlet />
      </div>
    </>
  )
}