import React from 'react';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import todoApp from './reducers'

const store = createStore(todoApp)

const Main = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render( Main, document.getElementById('root'));
serviceWorker.unregister();
