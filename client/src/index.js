import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss'
import App from './App';
import {BrowserRouter as Router } from "react-router-dom";
import { SearchContextProvider } from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AuthContextProvider>
    <SearchContextProvider>
      <Router>
        <App />
      </Router>
    </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


