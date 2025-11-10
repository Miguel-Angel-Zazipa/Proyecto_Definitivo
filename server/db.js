import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',     // tu contraseña de MySQL
  database: 'proyecto_votacion',  // tu base de datos
});

export default pool;
