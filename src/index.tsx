import React from 'react'
import './App.css'
import ReactDOM from 'react-dom';
import App from './App';
import { setupStore } from './store';
import { Provider } from 'react-redux';

const store = setupStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);


