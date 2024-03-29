import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.scss';


/* const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App />
      ),
    }
]); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

