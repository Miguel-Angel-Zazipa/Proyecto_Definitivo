import React, {Component} from "react";
import {Link} from 'react-router-dom';
import logo from './img/logo.png'
import face from './img/face.png';
import insta from './img/insta.png';
import x from './img/x.png';

function Register() {
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
                            <Link to={"Candidatos"}><a>Candidatos</a></Link>
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
            <p class="highlight">Completa el formulario para <strong>registrarte</strong> en la <span
                    class="highlight">elección de personero</span>.</p>
        </div>
    </section>

    <section class="registro-form fade-in-up">
        <div class="container text-center">
            <h2>Formulario de Registro</h2>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre" required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="apellido">Apellido</label>
                        <input type="text" class="form-control" name="apellido" id="apellido" placeholder="Apellido"
                            required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="numeroDocumento">Número de Documento</label>
                        <input type="number" class="form-control" name="documento" id="documento"
                            placeholder="Número de Documento" required/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="usuario">Tipo Usuario</label>
                            <input type="text" class="form-control" name="usuario" id="usuario" placeholder="Usuario"
                                required/>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="contrasena">Contraseña</label>
                                <div class="input-group">
                                    <input type="password" class="form-control" name="contrasena" id="contrasena"
                                        placeholder="Contraseña" required/>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary toggle-password" type="button"
                                            data-target="#contrasena">Mostrar</button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="confirmarContrasena">Confirmar Contraseña</label>
                                <div class="input-group">
                                    <input type="password" class="form-control" id="confirmarContrasena"
                                        placeholder="Confirmar Contraseña" required/>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary toggle-password" type="button"
                                            data-target="#confirmarContrasena">Mostrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Registrar</button>
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
