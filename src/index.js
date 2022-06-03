import React from 'react';
import ReactDOM from 'react-dom/client';
import { JournalApp } from './JournalApp';
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));





root.render(
  <BrowserRouter>
    <JournalApp />
  </BrowserRouter>
);

