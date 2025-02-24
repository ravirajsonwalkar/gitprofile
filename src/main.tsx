import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';
import CONFIG from '../gitprofile.config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GitProfile config={CONFIG} />
  </React.StrictMode>,
);
