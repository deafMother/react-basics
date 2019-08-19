import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { StyleRoot } from 'radium'; // required in case of applying media queries

ReactDOM.render(
  <StyleRoot>
    <App />
  </StyleRoot>,
  document.getElementById('root')
);
registerServiceWorker();
