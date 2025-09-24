import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './home';
import Login  from './login';
import Register from './register';
import Fechas from './fechas';
import Candidatos from './candidatos';
import Votacion from './votacion';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import {StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {path:"/", element:<Home/>},
  {path:"/crud", element:<App/>},
  {path:"/login", element:<Login/>},
  {path:"/register", element:<Register/>},
  {path:"/fechas", element:<Fechas/>},
  {path:"/candidatos", element:<Candidatos/>},
  {path:"/votacion", element:<Votacion/>}

])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
