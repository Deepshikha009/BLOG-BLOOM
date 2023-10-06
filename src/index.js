import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Context from './context/Context';

const root = document.getElementById('root');
const rootElement = createRoot(root); // Create a root with createRoot
rootElement.render(
    <React.StrictMode><Context>
     <App />
    </Context></React.StrictMode>
);

