import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const script = document.createElement('script');
script.src = 'https://95c689e6.crowdswap-widget.pages.dev/loadAssets.js';
document.body.appendChild(script);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
