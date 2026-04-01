import './App.css'
import { Outlet } from 'react-router-dom';
import Demo from './ReduxSaga.jsx';
import { Menu } from './components/Menu';
import { useState } from 'react';
import DemoUser from './ReduxSagaUser.jsx';
import ReduxObservable from './ReduxObservable.jsx';
import CompanyList from './CompanyList.jsx';

export function App(){

  console.log('App component rendered-145');
  /** Data pass from child to parent */
  const [msg, setMsg] = useState('PL');
  const getMsg = (msg) =>{
    setMsg(msg);
  }

  return (
    <>
      <CompanyList />
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