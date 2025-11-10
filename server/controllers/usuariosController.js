import pool from '../db.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export const registrarUsuario = async (req, res) => {
  try {
    const { nombre, numero_cedula, email, password, tipo_usuario } = req.body;

    // Validaciones básicas
    if (!nombre || !numero_cedula || !email || !password || !tipo_usuario) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    if (![1, 2].includes(Number(tipo_usuario))) {
      return res.status(400).json({ message: 'Tipo de usuario inválido' });
    }

    // Verificar si el usuario ya existe
    const [usuarioExistente] = await pool.query(
      'SELECT id FROM usuarios WHERE email = ? OR numero_cedula = ?',
      [email, numero_cedula]
    );

    if (usuarioExistente.length > 0) {
      return res.status(409).json({ message: 'El usuario ya está registrado' });
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertar usuario
    await pool.query(
      'INSERT INTO usuarios (nombre, numero_cedula, email, password, tipo_usuario) VALUES (?, ?, ?, ?, ?)',
      [nombre, numero_cedula, email, hashedPassword, tipo_usuario]
    );

    return res.status(201).json({ message: 'Usuario registrado exitosamente' });

  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

const JWT_SECRET = "mi_clave_secreta"; // ⚠️ En producción, guárdala en una variable de entorno (.env)

// --- LOGIN --

export const iniciarSesion = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    // Buscar usuario por email
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE email = ?", [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const usuario = rows[0];

    // Verificar contraseña
    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Crear token JWT
    const token = jwt.sign(
      { id: usuario.id, tipo_usuario: usuario.tipo_usuario },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    return res.status(200).json({
      message: "Inicio de sesión exitoso",
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        tipo_usuario: usuario.tipo_usuario,
      },
    });
  } catch (error) {
    console.error("Error en inicio de sesión:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};
