import { useState } from 'react';
import './css/App.css';
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numero_cedula, setCedula] = useState();
  const [correo, setCorreo] = useState("");
  const [tipousuario, setTipoUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [id, setId] = useState(0);

  const [editar, setEditar] = useState(false);

  const [usuariosLista, setUsuarios] = useState([]);

  const add = ()=>{
    Axios.post("http://localhost:3001/create", {
      nombre:nombre,
      apellido: apellido,
      cedula:numero_cedula,
      correo:correo,
      tipousuario:tipousuario,
      contraseña:contraseña,
    }).then(()=>{
      getUsuarios();
      alert("Usuario registrado");
      limpiarCampos();
    });
  }

  const editarUsuario = (val)=>{
    setEditar(true);

    setNombre(val.nombre);
    setApellido(val.apellido);
    setCedula(val.numero_cedula);
    setCorreo(val.correo);
    setTipoUsuario(val.tipousuario);
    setContraseña(val.contraseña);
    setId(val.id);
  }

  const update = ()=>{
    Axios.put("http://localhost:3001/update", {
      id:id,
      nombre:nombre,
      apellido:apellido,
      cedula:numero_cedula,
      correo:correo,
      tipousuario:tipousuario,
      contraseña:contraseña,
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
    setApellido("");
    setCedula("");
    setCorreo("");
    setTipoUsuario("");
    setContraseña("");
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

      <div className="card text-center">
      <div className="card-header">
        Gestion de Usuarios
      </div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Nombre:</span>
          <input onChange={(event)=>{setNombre(event.target.value)}} value={nombre} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Apellido:</span>
          <input onChange={(event)=>{setApellido(event.target.value)}} value={apellido} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Cedula:</span>
          <input onChange={(event)=>{setCedula(event.target.value)}} value={numero_cedula} type="number" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Correo:</span>
          <input onChange={(event)=>{setCorreo(event.target.value)}} value={correo} type="email" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Tipo de Usuario:</span>
          <input onChange={(event)=>{setTipoUsuario(event.target.value)}} value={tipousuario} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Contraseña:</span>
          <input onChange={(event)=>{setContraseña(event.target.value)}} value={contraseña} type="password" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>

      </div>
      <div className="card-footer text-muted">
        {
          editar==true?
          <div>
          <button className='btn btn-warning m-2' onClick={update} >Actualizar</button>
          <button className='btn btn-info m-2' onClick={limpiarCampos} >Cancelar</button>  
          </div>
          :<button className='btn btn-success' onClick={add} >Registrar</button>
        }
      </div>
    </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Cedula</th>
              <th scope="col">Correo</th>
              <th scope="col">Tipo Usuario</th>
              <th scope="col">Contraseña</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              usuariosLista.map((val, key)=>{
              return <tr key={val.id}>
              <th>{val.id}</th>
              <td>{val.nombre}</td>
              <td>{val.apellido}</td>
              <td>{val.numero_cedula}</td>
              <td>{val.correo}</td>
              <td>{val.tipousuario}</td>
              <td>{val.contraseña}</td>
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

    </div>

  );
}

export default App;
