import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import logo from './img/logo.png'
import face from './img/face.png'
import x from './img/x.png'
import insta from './img/insta.png'
import UserInfoBox from './userInfo';

function RegistrarCandidato() {
  const [votaciones, setVotaciones] = useState([]);
  const [formData, setFormData] = useState({
    id_votacion: "",
    nombre: "",
    partido: "",
    eslogan: "",
    foto: null,
  });

  useEffect(() => {
    const cargarVotaciones = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3001/api/votaciones/activas", {
        headers: { "Authorization": `Bearer ${token}` },
      });
      const data = await response.json();
      setVotaciones(data);
    };
    cargarVotaciones();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const registrarCandidato = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const form = new FormData();
    form.append("id_votacion", formData.id_votacion);
    form.append("nombre", formData.nombre);
    form.append("partido", formData.partido);
    form.append("eslogan", formData.eslogan);
    if (formData.foto) form.append("foto", formData.foto);

    const response = await fetch("http://localhost:3001/api/candidatos/registrar", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: form,
    });

    const data = await response.json();
    alert(data.message);
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
        </header>

        <section class="hero">
            <div class="container text-center">
                <h1>Registrar Candidato</h1>
                <p>Agrega un candidato para que sea visible para los usuarios.</p>
            </div>
        </section>

        <div class="contenedor-formulario">
          <div class="formulario-candidato">
            <h2>Formulario de Registro</h2>
            <form onSubmit={registrarCandidato}>
                <label>Selecciona una votación</label><br/>
                <select name="id_votacion" onChange={handleChange}>
                  <option value="">Selecciona una votación</option>
                  {votaciones.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.titulo}
                    </option>
                  ))}
                </select>
              
              <div>
                <label>Nombre</label><br/>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre del candidato"
                  onChange={handleChange}
                />
              </div>

              <div>
              <label>Partido Politico</label><br/>
              <input
                type="text"
                name="partido"
                placeholder="Partido político del candidato"
                onChange={handleChange}
              />
              </div>

              <div>
                <label>Eslogan</label><br/>
              <input
                type="text"
                name="eslogan"
                placeholder="Eslogan del candidato"
                onChange={handleChange}
              />
              </div>

              <div>
              <label>Imagen</label><br/>
              <input
                type="file"
                name="foto"
                accept="image/*"
                onChange={handleChange}
              />
              </div>
              <button className='btn btn-success' type="submit">Registrar</button>
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

export default RegistrarCandidato;
