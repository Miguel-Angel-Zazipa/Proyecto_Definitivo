import React, { useState } from "react";
import {Link} from 'react-router-dom';
import logo from './img/logo.png'
import face from './img/face.png'
import x from './img/x.png'
import insta from './img/insta.png'
import UserInfoBox from './userInfo';

function CrearVotacion() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha_fin, setFecha_Fin] = useState("");

  const crearVotacion = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:3001/api/votaciones/crear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ titulo, descripcion, fecha_fin }),
    });

    const data = await response.json();
    alert(data.message);
    window.location.href = "/registrarcandidato";
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
                            <Link to={"/menu"}><a>Menu</a></Link>
                        </li>
                        </ul>
                        <div class="navbar-nav ml-auto">
                        </div>
                    </div>
                </nav>
                  <div>
                    <UserInfoBox />
                </div>
        </header>
    
      <section class="hero">
            <div class="container text-center">
                <h1>Crear Votación</h1>
                <p>Agrega una votacion para que sea visible para los usuarios.</p>
            </div>
        </section>

      <div className="contenedor-formulario">
        <div className="formulario-candidato">
          <h2>Formulario para crear nueva votación</h2>
          <form onSubmit={crearVotacion}>
            <label>Titulo</label><br/>
            <input
              type="text"
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <div>
            <label>Descripcion</label><br/>
            <textarea 
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
            </div>

            <div>
            <label >Fecha de Cierre</label><br/>
            <input 
              type="date"
              placeholder="Ingrese una fecha"
              value={fecha_fin}
              onChange={(e) => setFecha_Fin(e.target.value)}
            />
            </div>
            <button className='btn btn-success' type="submit">Crear</button>
          </form>
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

export default CrearVotacion;
