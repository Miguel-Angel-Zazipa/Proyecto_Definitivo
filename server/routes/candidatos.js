import express from "express";
import {
  registrarCandidato,
  listarCandidatos,
  upload,
} from "../controllers/candidatosController.js";
import { verificarToken, soloAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🧑‍💼 Crear candidato (solo admin)
router.post(
  "/registrar",
  verificarToken,
  soloAdmin,
  upload.single("foto"),
  registrarCandidato
);

// 📋 Ver candidatos de una votación
router.get("/:id_votacion", verificarToken, listarCandidatos);

export default router;
