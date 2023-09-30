import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, legacy_createStore} from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

const store = legacy_createStore(movies)
console.log('store', store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App store={store} />,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

