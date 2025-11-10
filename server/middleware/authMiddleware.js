import jwt from "jsonwebtoken";

const JWT_SECRET = "mi_clave_secreta"; // ⚠️ En producción, usa process.env.JWT_SECRET

// Middleware para verificar token
export const verificarToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // El token debe venir como: "Bearer <token>"
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Acceso no autorizado: token faltante" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    // Guardar los datos del usuario en la request
    req.usuario = decoded;

    next(); // continuar con la ruta
  } catch (error) {
    console.error("Error en la verificación del token:", error);
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
};

// Middleware para verificar si el usuario es administrador
export const soloAdmin = (req, res, next) => {
  if (req.usuario?.tipo_usuario !== 1) {
    return res.status(403).json({ message: "Acceso denegado: se requiere rol de administrador" });
  }
  next();
};
