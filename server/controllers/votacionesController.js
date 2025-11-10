import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "proyecto_votacion"
});

// 🧑‍💼 Crear votación (solo admin)
export const crearVotacion = async (req, res) => {
  const { titulo, descripcion, fecha_fin } = req.body;

  try {
    const [result] = await pool.query(
      "INSERT INTO votaciones (titulo, descripcion, fecha_fin) VALUES (?, ?, ?)",
      [titulo, descripcion, fecha_fin]
    );

    res.status(201).json({ message: "Votación creada exitosamente", id: result.insertId });
  } catch (error) {
    console.error("Error al crear votación:", error);
    res.status(500).json({ message: "Error al crear la votación" });
  }
};

// 🙋 Obtener votaciones activas (usuarios)
export const listarVotacionesActivas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM votaciones WHERE estado = 'activa'" );
    res.json(rows);
  } catch (error) {
    console.error("Error al listar votaciones:", error);
    res.status(500).json({ message: "Error al obtener las votaciones" });
  }
};

// 🙋 Emitir voto (usuarios)
export const registrarVoto = async (req, res) => {
  const { id_votacion, id_candidato } = req.body;
  const id_usuario = req.usuario.id; // viene del token (middleware de auth)

  if (!id_votacion || !id_candidato) {
    return res.status(400).json({ message: "Faltan datos del voto" });
  }

  try {

    const [votacion] = await pool.query(
      "SELECT fecha_inicio, fecha_fin, estado FROM votaciones WHERE id = ?",
      [id_votacion]
    );

    if (votacion.length === 0) {
      return res.status(404).json({ message: "La votación no existe" });
    }

    const { fecha_inicio, fecha_fin, estado } = votacion[0];
    const ahora = new Date();

    // Verificar si la votación está cerrada o fuera de rango
    if (estado === "cerrada" || ahora < new Date(fecha_inicio) || ahora > new Date(fecha_fin)) {
      return res.status(400).json({ message: "Esta votación no está activa o ya expiró" });
    }

    // Verificar si el usuario ya votó en esa votación
    const [existe] = await pool.query(
      "SELECT * FROM votos WHERE id_votacion = ? AND id_usuario = ?",
      [id_votacion, id_usuario]
    );

    if (existe.length > 0) {
      return res.status(400).json({ message: "Ya has votado en esta votación" });
    }

    // Registrar el voto
    await pool.query(
      "INSERT INTO votos (id_votacion, id_usuario, id_candidato) VALUES (?, ?, ?)",
      [id_votacion, id_usuario, id_candidato]
    );

    res.status(201).json({ message: "Voto registrado con éxito" });
  } catch (error) {
    console.error("Error al registrar el voto:", error);
    res.status(500).json({ message: "Error al registrar el voto" });
  }
};

// 🧑‍💼 Cerrar votación
export const cerrarVotacion = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("UPDATE votaciones SET activa = 'cerrada' WHERE id = ?", [id]);
    res.json({ message: "Votación cerrada con éxito" });
  } catch (error) {
    console.error("Error al cerrar votación:", error);
    res.status(500).json({ message: "Error al cerrar la votación" });
  }
};

export const cerrarVotacionesExpiradas = async () => {
  try {
    await pool.query(
      "UPDATE votaciones SET estado = 'cerrada' WHERE fecha_fin < NOW() AND estado = 'activa'"
    );
    console.log("✅ Votaciones expiradas cerradas automáticamente");
  } catch (error) {
    console.error("Error al cerrar votaciones:", error);
  }
};


export const obtenerVotacionesCerradas = async (req, res) => {
  try {
    const [votaciones] = await pool.query(
      `
      SELECT id, titulo, descripcion, fecha_inicio, fecha_fin, estado
      FROM votaciones
      WHERE estado = 'cerrada' OR fecha_fin < NOW()
      ORDER BY fecha_fin DESC
      `
    );

    res.status(200).json(votaciones);
  } catch (error) {
    console.error("Error al obtener votaciones cerradas:", error);
    res.status(500).json({ message: "Error al obtener votaciones cerradas" });
  }
};

// 📊 Obtener resultados de una votación
export const obtenerResultadosVotacion = async (req, res) => {
  const { id } = req.params; // id de la votación

  try {
    // 🔹 Verificar si la votación existe
    const [votacion] = await pool.query("SELECT * FROM votaciones WHERE id = ?", [id]);
    if (votacion.length === 0) {
      return res.status(404).json({ message: "La votación no existe" });
    }

    // 🔹 Consultar los candidatos y sus votos
    const [resultados] = await pool.query(
      `
      SELECT 
        c.id,
        c.nombre,
        c.eslogan,
        c. partido,
        c.foto_url,
        COUNT(v.id) AS total_votos
      FROM candidatos c
      LEFT JOIN votos v ON c.id = v.id_candidato AND v.id_votacion = ?
      WHERE c.id_votacion = ?
      GROUP BY c.id
      ORDER BY total_votos DESC
      `,
      [id, id]
    );

    res.status(200).json({
      votacion: votacion[0],
      resultados,
    });
  } catch (error) {
    console.error("Error al obtener resultados:", error);
    res.status(500).json({ message: "Error al obtener los resultados" });
  }
};

