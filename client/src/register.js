import React, {Component} from "react";
import {Link} from 'react-router-dom';

function Register() {
  return (
    <div className="App">      
        <header>
                <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                    <img id="logo" src="../src/img/logo.png" alt="Logo de la Empresa"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <h6 id="Titulo">Sistema de Votacion</h6>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to={"/"}><a>Inicio</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"Candidatos"}><a>Candidatos</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"Fechas"}><a>Fechas</a></Link>
                    </li>
                    </ul>
                    <div class="navbar-nav ml-auto">
                        <Link to={"/Login"}><a class="nav-item nav-link btn btn-primary">Ingresar</a></Link>
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
        <div class="container">
            <h2>Formulario de Registro</h2>
            <form action="../../../index.php?action=register" method="post"/>
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

      
    <footer class="footer mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4 text-center">
                    <a href="#">
                        <img id="escudo" src="../img/escudo.png" alt="Logo de la Empresa" class="footer-logo"/>
                    </a>
                </div>
                    <div class="col-md-4">
                        <h5>Secciones</h5>
                        <ul class="list-unstyled">
                            <Link to={"/"}><a>Inicio</a></Link><br/>
                            <Link to={"/Candidatos"}><a>Candidatos</a></Link>
                            <Link to={"/Fechas"}><a>Fechas</a></Link>
                        </ul>
                    </div>
                <div class="col-md-4 text-center">
                    <h5>Síguenos</h5>
                    <a href="https://www.youtube.com/@institutotecnicoindustrial408/videos" target="_blank" class="btn btn-outline-primary btn-sm">
                    <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="https://x.com/?lang=es" target="_blank" class="btn btn-outline-info btn-sm">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" class="btn btn-outline-danger btn-sm">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/groups/5188566389?locale=es_LA" target="_blank" class="btn btn-outline-primary btn-sm">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="../js/scripts_registrar.js"></script>

    </div>
  );
}

export default Register;
