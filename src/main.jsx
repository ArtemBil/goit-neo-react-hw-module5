import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import axios from 'axios';
import { TMDB_API_URL, TMDB_READ_API_TOKEN } from './utils/constants.js';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.jsx';

axios.defaults.baseURL = TMDB_API_URL;
axios.defaults.headers.common['Authorization'] =
  `Bearer ${TMDB_READ_API_TOKEN}`;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
