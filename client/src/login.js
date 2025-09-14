import React, {Component} from "react";
import './css/login.css';

function login(){

    state={
        form:{
            cedula:'',
            contraseña:''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    return(
            <div className="login">
                <div className="formulario">
                    <label>Numero de Cedula: <input type="number" name="cedula" onChange={this.handleChange}></input></label><br/>
                    <label>Contraseña: <input type="password" name="contraseña" onChange={this.handleChange}></input></label>
                    <button >Iniciar Sesion</button>
                </div>

            </div>
        );

}

export default login;