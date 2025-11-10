import mysql from "mysql2/promise";
import multer from "multer";
import path from "path";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "proyecto_votacion",
});

// 📦 Configurar multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Carpeta donde se guardarán las fotos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });

// 🧑‍💼 Registrar un candidato
export const registrarCandidato = async (req, res) => {
  const { id_votacion, nombre, partido, eslogan } = req.body;
  const foto = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const [result] = await pool.query(
      "INSERT INTO candidatos (id_votacion, nombre, partido, eslogan, foto_url) VALUES (?, ?, ?, ?, ?)",
      [id_votacion, nombre, partido, eslogan, foto]
    );

    res.status(201).json({
      message: "Candidato registrado con éxito",
      id: result.insertId,
      foto_url: foto,
    });
  } catch (error) {
    console.error("Error al registrar candidato:", error);
    res.status(500).json({ message: "Error al registrar candidato" });
  }
};

// 📋 Listar candidatos por votación
export const listarCandidatos = async (req, res) => {
  const { id_votacion } = req.params;
  try {
    const [rows] = await pool.query(
      "SELECT * FROM candidatos WHERE id_votacion = ?",
      [id_votacion]
    );
    res.json(rows);
  } catch (error) {
    console.error("Error al listar candidatos:", error);
    res.status(500).json({ message: "Error al obtener candidatos" });
  }
};
