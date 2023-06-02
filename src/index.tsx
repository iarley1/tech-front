import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/globalStyles';

import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);