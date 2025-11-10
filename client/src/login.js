import React, {Component} from "react";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from './img/logo.png'
import face from './img/face.png';
import insta from './img/insta.png';
import x from './img/x.png';

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setMensaje("Por favor ingrese su correo y contraseña.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setMensaje("Inicio de sesión exitoso ✅");
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));

        const token = localStorage.getItem("token");

        // Redirigir según el tipo de usuario
        if (data.usuario.tipo_usuario === 1) {
          window.location.href = "/menu";
        } else {
          window.location.href = "/votacion";
        }
      } else {
        setMensaje(data.message || "Error en el inicio de sesión");
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
                            <Link to={"/register"}><a class="boton">Registrarse</a></Link>
                        </div>
                    </div>
                </nav>
        </header>
    

    <section class="hero">
        <div class="container text-center">
            <h1 class="fade-in">Inicio de Sesion</h1>
            <p class="highlight">Completa el formulario para <strong>iniciar sesion</strong> en la <span
                    class="highlight">elección de personero</span>.</p>
        </div>
    </section>

    <section class="">
        <div class="contenedor-formulario">
            <div className="formulario-candidato">
            <form onSubmit={handleSubmit}>
            <h2>Formulario de Inicio de Sesion</h2>
                <div class="form-row">
                    <div class="">
                        <label>Correo Electronico</label>
                        <input onChange={handleChange} value={formData.email} type="email" name="email" class="form-control" 
                            placeholder="Correo Electronico" required/>
                    </div>
                </div>

                <div class="">
                    <div class="">
                        <div class="">
                            <div class="">
                                <label>Contraseña</label>
                                <div class="input-group">
                                    <input onChange={handleChange} value={formData.password} type="password" class="form-control" name="password"
                                        placeholder="Contraseña" required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-success' >Ingresar</button>
                </div>
            </form>
            {mensaje && <p>{mensaje}</p>}
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

export default Login;
