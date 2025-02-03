import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { GlobalStyle } from './styles/global';


const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);