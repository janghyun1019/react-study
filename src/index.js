import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TempApp from './TempApp';
import reportWebVitals from './reportWebVitals';
import State01 from './components/State01';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TempApp /> */}
    <State01 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
