import express from 'express';
import {registrarUsuario, iniciarSesion} from '../controllers/usuariosController.js';
import { verificarToken, soloAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/usuarios/registro
router.post('/registro', registrarUsuario);
router.post("/login", iniciarSesion);

router.get("/perfil", verificarToken, async (req, res) => {
  res.json({
    message: "Acceso concedido al perfil del usuario",
    usuario: req.usuario,
  });
});

router.get("/votacion", verificarToken, async (req, res) => {
  res.json({
    message: "Acceso concedido al perfil del usuario",
    usuario: req.usuario,
  });
});

router.get("/crud", verificarToken, soloAdmin, (req, res) => {
  res.json({
    message: "Bienvenido administrador",
    usuario: req.usuario,
  });
});

export default router;
