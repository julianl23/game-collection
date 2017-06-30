import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Included to catch server changes as part of the Webpack build
import Server from './server';  // eslint-disable-line no-unused-vars
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
