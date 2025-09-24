import React, {Component} from "react";
import {Link} from 'react-router-dom';

function Login() {
  return (

    <body>
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
                        <Link to={"/Candidatos"}><a>Candidatos</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to={"/Fechas"}><a>Fechas</a></Link>
                    </li>
                    </ul>
                    <div class="navbar-nav ml-auto">
                        <Link to={"/Register"}><a class="nav-item nav-link btn btn-primary">Registrar</a></Link>
                    </div>
                </div>
                </nav>
        </header>

    <section class="hero">
        <div class="container text-center">
            <h1 class="fade-in">Inicio de Sesión</h1>
            <p class="highlight">Completa el formulario para <strong>ingresar</strong> en la <span
                    class="highlight">elección de personero</span>.</p>
        </div>
    </section>

    <section class="registro-form fade-in-up">
        <div class="container">
            <h2>Formulario de Inicio de Sesión</h2>
            <form action="../../controllers/Ctrl_Login.php" method="post">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="documento">Número de Documento</label>
                        <input type="number" class="form-control" name="usuario" id="usuario"
                            placeholder="Número de Documento" required/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="contrasena">Contraseña</label>
                        <div class="input-group-append">
                            <input type="password" class="form-control" name="contrasena" id="contrasena"
                                placeholder="Contraseña" required/>
                            <button class="btn btn-outline-secondary toggle-password" type="button"
                                data-target="#contrasena">Mostrar</button>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
            </form>
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
                        <Link to={"/"}>Inicio</Link><br/>
                        <Link to={"/Candidatos"}>Candidatos</Link><br/>
                        <Link to={"/Fechas"}>Fechas</Link><br/>
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
    </body>

  );
};

export default Login;


