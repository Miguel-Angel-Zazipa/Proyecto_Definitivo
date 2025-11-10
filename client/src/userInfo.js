import React from "react";

const UserInfoBox = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) return null; // Si no hay usuario, no muestra nada

  const rol = usuario.tipo_usuario === 1 ? "Administrador" : "Usuario";

  return (
    <div>
      <p>Nombre: <span>{usuario.nombre}</span></p>
      <p>Rol: {rol}</p>
    </div>
  );
};

export default UserInfoBox;
