import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { StoreProvider } from 'easy-peasy'
import { store } from './../src/store'
import { ApiProvider } from './components/behavior/ApiContext'

ReactDOM.render(
  <StoreProvider store={store}>
    <ApiProvider>
      <App />
    </ApiProvider>
  </StoreProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
