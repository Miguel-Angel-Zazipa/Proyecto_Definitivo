import React from "react";
import { Navigate } from "react-router-dom";

function RutaAdmin({ children }) {
  const token = localStorage.getItem("token");
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Solo permitir si el tipo de usuario es 1 (admin)
  if (usuario?.tipo_usuario !== 1) {
    return <Navigate to="/crud" replace />;
  }

  return children;
}

export default RutaAdmin;
