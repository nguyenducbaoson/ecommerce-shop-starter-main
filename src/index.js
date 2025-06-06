import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//product provider
import ProductProvider from './contexts/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
);
