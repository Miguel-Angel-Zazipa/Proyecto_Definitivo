import React, {Component} from "react";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Axios from "axios";
import logo from './img/logo.png'
import face from './img/face.png';
import insta from './img/insta.png';
import x from './img/x.png';

function Register() {

    const [formData, setFormData] = useState({
    nombre: "",
    numero_cedula: "",
    email: "",
    password: "",
    tipo_usuario: 2, // por defecto usuario normal
  });

  const [errors, setErrors] = useState({}); // Para almacenar errores de validación
  const [mensaje, setMensaje] = useState(""); // Mensaje de éxito o error del servidor

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validarFormulario = () => {
    let nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!formData.numero_cedula.trim()) {
      nuevosErrores.numero_cedula = "La cédula es obligatoria.";
    } else if (!/^\d+$/.test(formData.numero_cedula)) {
      nuevosErrores.numero_cedula = "La cédula debe contener solo números.";
    }

    if (!formData.email.trim()) {
      nuevosErrores.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nuevosErrores.email = "El correo electrónico no es válido.";
    }

    if (!formData.password.trim()) {
      nuevosErrores.password = "La contraseña es obligatoria.";
    } else if (formData.password.length < 6) {
      nuevosErrores.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (![ "1", "2" ].includes(formData.tipo_usuario)) {
      nuevosErrores.tipo_usuario = "Selecciona un tipo de usuario válido.";
    }

    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0; // true si no hay errores
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) return; // Detener si hay errores

    try {
      const response = await fetch("http://localhost:3001/api/usuarios/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje(data.message);
        setFormData({
          nombre: "",
          numero_cedula: "",
          email: "",
          password: "",
          tipo_usuario: "2",
        });
        setErrors({});
      } else {
        setMensaje(data.message || "Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      setMensaje("Error de conexión con el servidor");
    }
  };


  return (
    <div className="App">      
        <header>
            <img id="logo" src={logo} alt="Logo de la Empresa"/>
            <h6 id="Titulo">Sistema de Votacion</h6>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to={"/"}><a>Inicio</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/Fechas"}><a>Fechas</a></Link>
                        </li>
                        </ul>
                        <div class="navbar-nav ml-auto">
                            <Link to={"/Login"}><a class="boton">Ingresar</a></Link>
                        </div>
                    </div>
                </nav>
        </header>
    

    <section class="hero">
        <div class="container text-center">
            <h1 class="fade-in">Registro de Usuarios</h1>
            <p class="highlight">Completa el formulario para <strong>registrarte</strong><span
                    class="highlight"></span>.</p>
        </div>
    </section>

    <section class="registro-form fade-in-up">
        <div class="contenedor-formulario">
            <div className="formulario-candidato">
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleSubmit}>
                <div class="form-row">
                    <div >
                        <label for="nombre">Nombre</label>
                        <input onChange={handleChange} type="text" name="nombre" className="form-control" placeholder="Nombre de Usuario" aria-describedby="basic-addon1"/>
                        {errors.nombre && <p style={{ color: "red" }}>{errors.nombre}</p>}
                    </div>
                </div>
                <div class="form-row">
                    <div >
                        <label for="numeroDocumento">Número de Documento</label>
                        <input onChange={handleChange} type="number" name="numero_cedula" class="form-control"
                            placeholder="Número de Documento" required/>
                        {errors.numero_cedula && (
                            <p style={{ color: "red" }}>{errors.numero_cedula}</p>
                        )}
                    </div>
                </div>

                <div class="form-row">
                    <div >
                        <label for="numeroDocumento">Correo Electronico</label>
                        <input onChange={handleChange} type="email" name="email" class="form-control" id="documento"
                            placeholder="Correo Electronico" required/>
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-row">
                        <div class="form-row">
                            <div >
                                <label for="contrasena">Contraseña</label>
                                <div class="input-group">
                                    <input onChange={handleChange} type="password"  name="password" class="form-control"
                                        placeholder="Contraseña" required/>
                                        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                                </div>
                            </div>
                            <div >
                                <select name="tipo_usuario" onChange={handleChange}>
                                    <option value="1">Administrador</option>
                                    <option value="2">Usuario</option>
                                </select>
                                {errors.tipo_usuario && (
                                    <p style={{ color: "red" }}>{errors.tipo_usuario}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-success' type="submit">Registrar</button>
                </div>
            </form>
            {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
            </div>
        </div>
    </section>

      
        <footer class="footer">
            <div class="container">
                <div class="footer-row">
                    <div class="footer-links">
                        <a>
                            <h1>Sistema de<br/> Votacion</h1>
                        </a>
                    </div>
                    <div class="footer-links">
                        <ul class="list-unstyled">
                            <Link to={"/Candidatos"}><a>Politica de Uso</a></Link><br/>
                            <Link to={"/Fechas"}><a>@2025 Sistema de Votacion</a></Link><br/>
                            <Link to={"/Fechas"}><a>¿Necesitas Ayuda?</a></Link>
                        </ul>
                    </div>


                    <div class="footer-links">
                        <h2 id="siguenos">Siguenos</h2>
                        <div class="social-link">
                            <a href="https://www.facebook.com/" target="_blank">
                                <img id="escudo" src={face} alt="Facebook" />
                            </a>
                            <a href="https://www.x.com/" target="_blank">
                                <img id="escudo" src={x} alt="X" />
                            </a>  
                            <a href="https://www.instagram.com/" target="_blank">
                                <img id="escudo" src={insta} alt="Instagram" />
                            </a>   
                        </div>   
                    </div>
                </div>
            </div>
        </footer>

    </div>
  );
}

export default Register;
