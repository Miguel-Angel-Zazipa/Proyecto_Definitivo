import { useState } from 'react';
import './css/App.css';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import logo from './img/logo.png'
import React from 'react';
import face from './img/face.png';
import insta from './img/insta.png';
import x from './img/x.png';
import UserInfoBox from './userInfo';

function App() {


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    window.location.href = "/login";
  };

  const [nombre, setNombre] = useState("");
  const [numero_cedula, setCedula] = useState();
  const [email, setEmail] = useState("");
  const [tipo_usuario, setTipoUsuario] = useState("");
  const [fecha_creacion, setFecha_Creacion] = useState("");
  const [id, setId] = useState(0);
  const [password, setPassword] = useState("");

  const [editar, setEditar] = useState(false);

  const [usuariosLista, setUsuarios] = useState([]);

  const add = ()=>{
    Axios.post("http://localhost:3001/create", {
      nombre:nombre,
      cedula:numero_cedula,
      email:email,
      tipou_suario:tipo_usuario,
      password:password,
    }).then(()=>{
      getUsuarios();
      alert("Usuario registrado");
      limpiarCampos();
    });
  }
  
  
  const editarUsuario = (val)=>{
    setEditar(true);

    setNombre(val.nombre);
    setCedula(val.numero_cedula);
    setEmail(val.email);
    setTipoUsuario(val.tipo_usuario);
    setId(val.id);
  }

  const update = ()=>{
    Axios.put("http://localhost:3001/update", {
      id:id,
      nombre:nombre,
      cedula:numero_cedula,
      email:email,
      tipo_usuario:tipo_usuario,
    }).then(()=>{
      getUsuarios();
      alert("Usuario actualizado");
      limpiarCampos();
    });
  }

  const eliminar = (id)=>{
    Axios.delete("http://localhost:3001/delete/"+id, {
    }).then(()=>{
      getUsuarios();
      alert("Usuario eliminado");
      limpiarCampos();
    });
  }

  const limpiarCampos = ()=>{
    setNombre("");
    setCedula("");
    setEmail("");
    setTipoUsuario("");
    setEditar(false);
  }

  const getUsuarios = ()=>{
    Axios.get("http://localhost:3001/usuarios").then((response)=>{
      setUsuarios(response.data);
    });
  }

  getUsuarios();

  return (
    <div className="App">
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

      <div className="card text-center">
      <div className="card-header">
        Gestion de Usuarios
      </div>
      <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre:</span>
            <input onChange={(event)=>{setNombre(event.target.value)}} value={nombre} type="text" className="form-control" placeholder="Nombre de Usuario" aria-label="Username" aria-describedby="basic-addon1"/>        
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Numero de Documento</span>
            <input onChange={(event)=>{setCedula(event.target.value)}} value={numero_cedula} type="number" className="form-control" placeholder="Numero de Cedula" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Correo Electronico:</span>
            <input onChange={(event)=>{setEmail(event.target.value)}} value={email} type="email" className="form-control" placeholder="Correo" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          {editar==false?
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Contraseña:</span>
            <input onChange={(event)=>{setPassword(event.target.value)}} value={password} type="password" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          :<a></a>
          }
          <div class="form-group col-md-6">
              <select name="tipo_usuario" onChange={(event)=>{setTipoUsuario(event.target.value)}} value={tipo_usuario}>
                  <option value="1">Administrador</option>
                  <option value="2">Usuario</option>
              </select>
            </div>   
      </div>
      <div className="card-footer text-muted">
        {
          editar==true?
          <div>
          <button className='btn btn-warning m-2' onClick={update} >Actualizar</button>
          <button className='btn btn-info m-2' onClick={limpiarCampos} >Cancelar</button>  
          </div>
          :<button className='btn btn-success' type='submit' onClick={add}>Registrar</button>
        }
        <Link to={"Login"}>
          <button className='btn btn-info m-2' >Regresar</button>
        </Link>
      </div>
    </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cedula</th>
              <th scope="col">Correo</th>
              <th scope="col">Tipo Usuario</th>
              <th scope="col">fecha_creacion</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              usuariosLista.map((val, key)=>{
              return <tr key={val.id}>
              <th>{val.id}</th>
              <td>{val.nombre}</td>
              <td>{val.numero_cedula}</td>
              <td>{val.email}</td>
              <td>{val.tipo_usuario}</td>
              <td>{val.fecha_creacion}</td>
              <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" onClick={()=>{editarUsuario(val)}} class="btn btn-info">Editar</button>
                  <button type="button" onClick={()=>{eliminar(val.id);}} class="btn btn-danger">Eliminar</button>
                </div>
              </td>
              </tr>
              })
            }
          </tbody>
        </table>

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

export default App;
