import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Link} from 'react-router-dom';
import logo from './img/logo.png'
import face from './img/face.png';
import insta from './img/insta.png';
import x from './img/x.png';
import UserInfoBox from './userInfo';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ResultadosVotaciones = () => {
  const [votaciones, setVotaciones] = useState([]);
  const [votacionSeleccionada, setVotacionSeleccionada] = useState(null);
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Cargar votaciones cerradas
  useEffect(() => {
    const fetchVotaciones = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/votaciones/cerradas");
        setVotaciones(res.data);
      } catch (error) {
        console.error("Error al cargar votaciones cerradas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVotaciones();
  }, []);

  // 🔹 Cargar resultados de la votación seleccionada
  const cargarResultados = async (idVotacion) => {
    try {
      const res = await axios.get(`http://localhost:3001/api/votaciones/${idVotacion}/resultados`);
      setVotacionSeleccionada(res.data.votacion);
      setResultados(res.data.resultados);
    } catch (error) {
      console.error("Error al obtener resultados:", error);
    }
  };

  if (loading) return <p className="text-center mt-6">Cargando votaciones cerradas...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow rounded-xl mt-10">
      <header>
            <img id="logo" src={logo} alt="Logo de la Empresa"/>
            <h6 id="Titulo">Sistema de Votacion</h6>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link to={"/votacion"}><a>Votaciones</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/resultados"}><a>Resultados</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <UserInfoBox />
                </div>
      </header>

        <section class="hero">
            <div class="container text-center">
                <h2 className="text-2xl font-bold text-center mb-6">Resultados de Votaciones</h2>
                <p class="highlight">Revisa los resultados <span class="highlight">de las
                    votaciones cerradas</span>.</p>
            </div>
        </section>

      {/* 🔹 Lista desplegable de votaciones */}
      <div className="contenedor-sele">
        <label className="block font-semibold mb-2">Selecciona una votación: </label>
        <select
          className="w-full p-3 border rounded-lg"
          onChange={(e) => cargarResultados(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
             Elige una votación 
          </option>
          {votaciones.map((v) => (
            <option key={v.id} value={v.id}>
              {v.titulo} ({new Date(v.fecha_fin).toLocaleDateString()})
            </option>
          ))}
        </select>
      </div>

      {/* 🔹 Mostrar resultados si hay votación seleccionada */}
      {votacionSeleccionada && (
        <div className="container">
          <h3 className="text-xl font-semibold mb-2">{votacionSeleccionada.titulo}</h3>
          <p className="text-gray-600 mb-4">{votacionSeleccionada.descripcion}</p>

          {resultados.length > 0 ? (
            <Bar
              data={{
                labels: resultados.map((c) => c.nombre),
                datasets: [
                  {
                    label: "Cantidad de votos",
                    data: resultados.map((c) => c.total_votos),
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                  title: { display: true, text: "Resultados" },
                },
                scales: {
                  y: { beginAtZero: true },
                },
              }}
            />
          ) : (
            <p className="text-gray-500">No hay votos registrados en esta votación.</p>
          )}
        </div>
      )}

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
};

export default ResultadosVotaciones;
