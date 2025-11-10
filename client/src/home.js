import React, {Component} from "react";
import {Link} from 'react-router-dom';
import styles from './css/style.css'
import logo from './img/logo.png'
import face from './img/face.png'
import x from './img/x.png'
import insta from './img/insta.png'
import imagen from './img/imagen.png'
import CarouselHome from "./carrusel";


function Home() {
  return (
    <div>
        <header>
            <img id="logo" src={logo} alt="Logo de la Empresa"/>
            <h6 id="Titulo">Sistema de Votacion</h6>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
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
                <h1 class="fade-in">Bienvenido a las votaciones</h1>
                <p class="highlight">Participa y <strong>elige</strong> a tu próximo <span class="highlight">candidato</span>.</p>
            </div>
        </section>

        <div>
            <CarouselHome />
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

export default Home;
