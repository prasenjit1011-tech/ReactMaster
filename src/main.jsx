import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import './index.css'

// // Example : 01 : ReduxToolkit
// import store from './store_reduxtoolkit.js'
// import App from './App.jsx';

// // Example : 02 :ReduxToolkit with Thunk
// import { store } from './myreduxthunk.js';
// import Login from './Login.jsx';
// const App = Login;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
