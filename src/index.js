// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import { createStore } from 'redux'
import todoApp from './Reducer'
import { test } from './Actions'
let store = createStore(todoApp, {text: '樊中魁'})
console.log(store.getState())
store.dispatch(test('樊中魁344'))
console.log(store.getState())
