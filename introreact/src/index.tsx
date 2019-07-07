import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import App_todo from './App_todo';
import App_footer from './App_footer';

ReactDOM.render(<App_todo />, document.getElementById('root'));
// ReactDOM.render(<App_todo />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
