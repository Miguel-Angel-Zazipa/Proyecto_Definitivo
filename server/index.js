import express from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from 'bcrypt';
import usuariosRoutes from './routes/usuarios.js';
import votacionesRoutes from "./routes/votaciones.js";
import candidatosRoutes from "./routes/candidatos.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/votaciones", votacionesRoutes);

app.use("/api/candidatos", candidatosRoutes);

// Servir imágenes
app.use("/uploads", express.static("uploads"));

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"proyecto_votacion"
});

app.use('/api/usuarios', usuariosRoutes);

app.post("/create", async(req,res)=>{
    const nombre = req.body.nombre;
    const numero_cedula = req.body.cedula;
    const email = req.body.email;
    const tipo_usuario = req.body.tipou_suario;
    const password = req.body.password;


    const hashedPassword =  await bcrypt.hash(password, 10);
    

    await db.query('INSERT INTO usuarios(nombre, numero_cedula, email, password, tipo_usuario) VALUES(?,?,?,?,?)', [nombre, numero_cedula, email, hashedPassword, tipo_usuario],
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
    const numero_cedula = req.body.cedula;
    const email = req.body.email;
    const tipo_usuario = req.body.tipo_usuario

    db.query('UPDATE usuarios SET nombre=?, numero_cedula=?, email=?, tipo_usuario=? WHERE id=?', [nombre, numero_cedula, email, tipo_usuario, id ],
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