import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContextProvider from './ConnectDB.jsx';
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <App />
    </ContextProvider>
)
