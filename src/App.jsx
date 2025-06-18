import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector, useDispatch } from 'react-redux';
import { increment } from './store_reduxtoolkit';

const App = () =>{
    const txt       = `App.js : Vite + React`;
    const count     = useSelector((state) => state.mycounter);
    const dispatch  = useDispatch();
    return (
      <>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <h3>{txt} : {count}</h3>
        <CompA />
        <CompB />
      </>
    )
}

const CompA = () => {
  const txt   = `CompA : Vite + React`;
  const cntA  = useSelector(state => state.mycounter);
  return (
    <>
      <h3>{txt} : {cntA}</h3>
    </>
  )
}

const CompB = () => {
  const txt   = `CompB : Vite + React`;
  const cntB  = useSelector(state => state.mycounter);
  return (
    <>
      <h3>{txt} : {cntB}</h3>
    </>
  )
}



export default App;
