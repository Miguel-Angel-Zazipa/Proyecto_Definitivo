const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sistema_votacion"
});

app.post("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const numero_cedula = req.body.cedula;
    const correo = req.body.correo;
    const tipousuario = req.body.tipousuario;
    const contrasena = req.body.contrasena;

    db.query('INSERT INTO usuarios(nombre, apellido, numero_cedula) VALUES(?,?,?)', [nombre, apellido, numero_cedula],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Usuario registrado exitosamente");
        }
    }
    );
});

app.get("/usuarios",(req,res)=>{
    db.query('SELECT * FROM usuarios',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
    );
});

app.put("/update",(req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const numero_cedula = req.body.cedula;
    const correo = req.body.correo;
    const tipousuario = req.body.tipousuario;
    const contrasena = req.body.contrasena;

    db.query('UPDATE usuarios SET nombre=?, apellido=?, numero_cedula=? WHERE id=?', [nombre, apellido, numero_cedula, id ],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Usuario actualizado exitosamente");
        }
    }
    );
});

app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;
    db.query('DELETE FROM usuarios WHERE id=?', id,
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Usuario eliminado exitosamente");
        }
    }
    );
});

app.listen(3001, ()=>{
    console.log("Corriendo en el puerto 3001")
})