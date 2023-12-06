import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import DashBoard from './pages/DashBoard';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';

const isAutenticated = localStorage.getItem('token') !== null



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/dashboard',
    element: <DashBoard />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
