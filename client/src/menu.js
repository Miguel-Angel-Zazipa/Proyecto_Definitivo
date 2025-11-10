import {Link} from 'react-router-dom';
import styles from './css/style.css'
import logo from './img/logo.png'
import face from './img/face.png'
import x from './img/x.png'
import insta from './img/insta.png'
import creaVota from './img/crearVotacion.png'
import agregar from './img/agregar.png'
import cerrar from './img/cerrar.png'
import administrar from './img/administrar.png'
import React from 'react';
import UserInfoBox from './userInfo';

function Menu() {

    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    window.location.href = "/login";
  };

  return (
    <div>
        <header>
            <img id="logo" src={logo} alt="Logo de la Empresa"/>
            <h6 id="Titulo">Sistema de Votacion</h6>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to={"/resultados"}><a>Resultados</a></Link>
                        </li>
                        </ul>
                        <div class="navbar-nav ml-auto">
                        </div>
                    </div>
                </nav>
                <div>
                    <UserInfoBox />
                </div>
                <div>
                    <button class="boton-cerrar-sesion" onClick={handleLogout}>Cerrar sesión</button>
                </div>
        </header>

        <section class="hero">
            <div class="container text-center">
                <h1>Bienvenido Administrador</h1>
                <p>Te presentamos la lista de acciones a las que puedes acceder</p>
            </div>
        </section>

        <div class="contenedor-votaciones">
            <a href="/crearvotacion" id='link'>
                <div class="menu">
                    <img class="img-menu" src={creaVota}/>
                    <h2>Crear una votacion</h2>
                        <div class="prueba">
                            <a>El sistema de votación propuesto representa una herramienta clave para garantizar procesos electorales seguros 
                                y eficientes. Su diseño, centrado en la accesibilidad y la integridad de los datos, asegura la participación 
                                activa de todos los ciudadanos y la protección contra posibles fraudes. Este sistema no solo mejora la 
                                experiencia del votante, sino que también optimiza el tiempo de conteo.</a><br/>
                        </div>
                </div>
            </a>
            <a href="/registrarcandidato" id='link'>
                <div class="menu">
                    <img class="img-menu" src={agregar}/>
                    <h2>Agregar candidatos</h2>
                        <div class="prueba">
                            <a>El sistema de votación propuesto representa una herramienta clave para garantizar procesos electorales seguros 
                            y eficientes. Su diseño, centrado en la accesibilidad y la integridad de los datos, asegura la participación 
                            activa de todos los ciudadanos y la protección contra posibles fraudes. Este sistema no solo mejora la 
                            experiencia del votante, sino que también optimiza el tiempo de conteo.</a><br/>
                        </div>
                </div>
            </a>
            <a href="/crud" id='link'>
                <div class="menu">
                    <img class="img-menu" src={administrar}/>
                    <h2>Administrar Usuarios</h2>
                        <div class="prueba">
                            <a>El sistema de votación propuesto representa una herramienta clave para garantizar procesos electorales seguros 
                                y eficientes. Su diseño, centrado en la accesibilidad y la integridad de los datos, asegura la participación 
                                activa de todos los ciudadanos y la protección contra posibles fraudes. Este sistema no solo mejora la 
                                experiencia del votante, sino que también optimiza el tiempo de conteo.</a><br/>
                        </div>
                </div>
            </a>
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
                            <Link to={"/Fechas"}><a>Sistema de Votacion</a></Link><br/>
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

export default Menu;