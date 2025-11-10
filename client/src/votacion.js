import React from 'react';
import {Link} from 'react-router-dom';
import logo from './img/logo.png'
import face from './img/face.png';
import insta from './img/insta.png';
import x from './img/x.png';
import mini from './img/mini.png'
import { useState, useEffect } from 'react';
import style from './css/style-votaciones.css';
import UserInfoBox from './userInfo';


function Votacion() {

    const [votaciones, setVotaciones] = useState([]);
      const [candidatos, setCandidatos] = useState([]);
      const [idVotacion, setIdVotacion] = useState(null);
      const [editar, setEditar] = useState(false);
    
      useEffect(() => {
        const token = localStorage.getItem("token");
        const cargarVotaciones = async () => {
          const res = await fetch("http://localhost:3001/api/votaciones/activas", {
            headers: { "Authorization": `Bearer ${token}` },
          });
          const data = await res.json();
          setVotaciones(data);
        };
        cargarVotaciones();
      }, []);
    
      const cargarCandidatos = async (id) => {
        setIdVotacion(id);
        const token = localStorage.getItem("token");
        const res = await fetch(`http://localhost:3001/api/candidatos/${id}`, {
          headers: { "Authorization": `Bearer ${token}` },
        });
        const data = await res.json();
        setCandidatos(data);
        setEditar(true);

      };
    
    const enviarVoto = async (id_candidato) => {
      const token = localStorage.getItem("token");
    
      const response = await fetch("http://localhost:3001/api/votaciones/votar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          id_votacion: idVotacion, // seleccionada en el frontend
          id_candidato,            // candidato elegido
        }),
      });
    
      const data = await response.json();
      alert(data.message);
    };

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
                <h1 class="fade-in">Panel Principal</h1>
                <p class="highlight">Aqui puedes gestionar tus <strong>votaciones</strong> o <span
                        class="highlight">participar en ellas</span>.</p>
            </div>
        </section>

        <section>
            <div class="contai">
                <div class="contenido">
                        <a class="titulo-votacion">Votaciones Disponibles</a><hr/>
                        <div class="contenedor-pru">
                            {votaciones.map((v) => (
                            <div class="votaciones" key={v.id}>
                                <h2>{v.titulo}</h2>
                                <div class="prueba">
                                    <a>{v.descripcion}</a><br/>
                                    <img class="mini-logo" src={mini}/><br/>
                                </div>
                                <h5>Fecha de Cierre: {new Date(v.fecha_fin).toLocaleDateString()}</h5>
                                <button onClick={() => cargarCandidatos(v.id)} className='ver-candidatos'>Ver candidatos</button>
                            </div>
                            ))}

                        </div>
                        {editar==true?
                        <div>
                            <a class="titulo-votacion">Tarjeton</a><hr/>
                        </div>
                        : <div></div>
                        
                        }
                        <div class="contenedor-pru">
                            <div>
                            {candidatos.length > 0 && (
                                <div className='tarjeton'>
                                {candidatos.map((c) => (
                                    <div key={c.id} className='candidatos'>
                                        <img src={`http://localhost:3001${c.foto_url}`} alt={c.nombre} width="100" /><br/>
                                        <p><b>{c.nombre}</b> - {c.partido}</p>
                                        <p><i>{c.eslogan}</i></p>
                                        <button onClick={() => enviarVoto(c.id)} className='ver-candidatos'>Votar por {c.nombre}</button>
                                    </div>
                                ))}
                                </div>
                            )}
                            </div>
                        </div>
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

export default Votacion;