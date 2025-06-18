import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import './index.css'


import { store } from './myreduxthunk.js';
import Login from './Login.jsx';
const App = Login;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
