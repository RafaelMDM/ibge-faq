import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './style/global';
import App from './App';

const ROOT_SELECTOR = '#root';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles appContainer={ROOT_SELECTOR} />
    <App />
  </React.StrictMode>,
  document.querySelector(ROOT_SELECTOR),
);
