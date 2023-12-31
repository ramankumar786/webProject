import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/calculator/Calculator.jsx';
import Home from './components/home/home';
import {
  createBrowserRouter,
  RouterProvider,
  Router,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/webProject",
    element: <Home></Home>,
  },
  {
    path: "calculator",
    element: <Calculator></Calculator>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
