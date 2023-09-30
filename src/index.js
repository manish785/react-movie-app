import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, legacy_createStore} from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

const store = legacy_createStore(movies)
console.log('store', store);
// console.log('BEFORE STORE', store.getState());

// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [{name : 'Superman '}]
// })

// console.log('AFTER STORE', store.getState());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App store={store} />,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

