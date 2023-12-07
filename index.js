import './i18next.js'
import './index.scss';
import App from './App';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import SuspenseLoader from './components/SuspenseLoader/SuspenseLoader';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseLoader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
