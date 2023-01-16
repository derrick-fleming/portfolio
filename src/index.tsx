import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/scroll-top';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(
  <>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </>);
