import {Link} from 'react-router-dom';
import styles from './css/style.css'
import logo from './img/logo.png'
import face from './img/face.png'
import x from './img/x.png'
import insta from './img/insta.png'
import React from 'react';

function Candidatos() {
  return (
    <div>
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
                        <Link to={"/Register"}><a class="boton">Registrar</a></Link>
                    </div>
                </div>
                </nav>
        </header>

        <section class="hero">
            <div class="container text-center">
                <h1 class="fade-in">Candidatos</h1>
                <p class="highlight">Conoce a los <strong>candidatos</strong> para la <span class="highlight">elección de
                    personero</span>.</p>
            </div>
        </section>

        <div class="section-title">
            <h3>Candidatos</h3>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="../img/est1.jpeg" alt="Candidato 1"/>
                    <div class="card-body">
                        <h5 class="card-title">Laura Martinez</h5>
                        <p class="card-text">Laura es una estudiante destacada en ciencias sociales y miembro activo del
                            club de debate. Le apasiona la justicia social y los derechos humanos.
                            Propuestas:
                            Crear un espacio de diálogo estudiantil mensual.
                            Fomentar proyectos de voluntariado en la comunidad.
                            Mejorar la comunicación entre estudiantes y directivos.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="../img/est2.jpeg" alt="Candidato 2"/>
                    <div class="card-body">
                        <h5 class="card-title">Carlos Gómez</h5>
                        <p class="card-text">Carlos es deportista, capitán del equipo de fútbol y conocido por su liderazgo
                            y trabajo en equipo.
                            Propuestas:
                            Organizar torneos intercolegiales.
                            Promover actividades físicas y deportivas para todos.
                            Mejorar las instalaciones deportivas de la escuela.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="../img/est3.jpeg" alt="Candidato 3"/>
                    <div class="card-body">
                        <h5 class="card-title">Ana Rodriguez</h5>
                        <p class="card-text">Ana es una estudiante de arte con talento para la pintura y la escultura.
                            Participa en numerosas exposiciones escolares.
                            Propuestas:
                            Crear un mural colectivo que represente la identidad de la escuela.
                            Implementar talleres de arte y cultura.
                            Organizar exposiciones de arte estudiantil.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="card-img-top" src="../img/est4.jpeg" alt="Candidato 4"/>
                    <div class="card-body">
                        <h5 class="card-title">Maria Fernandez</h5>
                        <p class="card-text">María es apasionada por la literatura y ha ganado varios concursos de
                            escritura. Es editora del periódico escolar.
                            Propuestas:
                            Fomentar un club de lectura.
                            Publicar una revista literaria estudiantil.
                            Organizar talleres de escritura creativa.</p>
                    </div>
                </div>
            </div>
        </div>


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

export default Candidatos;