import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './components/reportWebVitals';
// import Home from './components/Home';
// import Greeting from './components/Greeting';
import {List} from './components/List';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <List type='Living Musician'>
      <li>Sachiko M</li>
      <li>Harvey Sid Fisher</li>
    </List>
    <List type='Living Cat Musician'>
      <li>Nora the Piano Cat</li>
    </List>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
