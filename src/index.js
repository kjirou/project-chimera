import React from 'react';
import ReactDOM from 'react-dom';

import RetryHeroes from './components/RetryHeroes';


window.document.addEventListener('DOMContentLoaded', () => {
  const container = window.document.querySelector('.js-pc-container');
  ReactDOM.render(React.createElement(RetryHeroes), container);
});
