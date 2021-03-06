import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app')
);