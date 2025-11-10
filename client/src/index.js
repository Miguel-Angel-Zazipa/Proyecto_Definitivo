import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './home';
import Login  from './login';
import Register from './register';
import Fechas from './fechas';
import Candidatos from './candidatos';
import Votacion from './votacion';
import CrearVotacion from './CrearVotacion';
import Votar from './Votar';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import {StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RegistrarCandidato from './RegistrarCandidato';
import ResultadosVotaciones from './Resultados';
import Menu from './menu';
import RutaProtegida from "./RutaProtegida";
import RutaAdmin from "./RutaAdmin";

const router = createBrowserRouter([
  {path:"/", element:<Home/>},

  {path:"/login", element:<Login/>},
  {path:"/register", element:<Register/>},
  {path:"/fechas", element:<Fechas/>},
  {path:"/candidatos", element:<Candidatos/>},
  {path:"/resultados", element:<ResultadosVotaciones/>},
  

  {path:"/votacion", element:<RutaProtegida> <Votacion/></RutaProtegida>},
  {path:"/votar", element:<RutaProtegida> <Votar/></RutaProtegida>},

  {path:"/menu", element:<RutaAdmin> <Menu /> </RutaAdmin>},
  {path:"/crud", element:<RutaAdmin> <App /> </RutaAdmin>},
  {path:"/crearvotacion", element:<RutaAdmin> <CrearVotacion /> </RutaAdmin>},
  {path:"/registrarcandidato", element:<RutaAdmin> <RegistrarCandidato/> </RutaAdmin>}

])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
