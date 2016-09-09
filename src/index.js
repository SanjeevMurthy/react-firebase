import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import '../node_modules/toastr/build/toastr.min.css';

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
