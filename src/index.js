import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/App';

import { StoreProvider } from 'easy-peasy'
import { store } from '~/store'
import { ApiProvider } from '~/components/behavior/ApiContext'

ReactDOM.render(
  <StoreProvider store={store}>
    <ApiProvider>
      <App />
    </ApiProvider>
  </StoreProvider>, document.getElementById('root'));
