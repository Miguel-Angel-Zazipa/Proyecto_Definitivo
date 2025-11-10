import express from "express";
import {
  crearVotacion,
  listarVotacionesActivas,
  cerrarVotacion,
  registrarVoto,
  obtenerVotacionesCerradas,
  obtenerResultadosVotacion
} from "../controllers/votacionesController.js";

import { verificarToken, soloAdmin } from "../middleware/authMiddleware.js";


const router = express.Router();

// 🧑‍💼 Crear votación (admin)
router.post("/crear", verificarToken, soloAdmin, crearVotacion);

// 🙋 Ver votaciones activas (usuarios autenticados)
router.get("/activas", verificarToken, listarVotacionesActivas);

// 🙋 Emitir voto (usuarios)
router.post("/votar", verificarToken, registrarVoto);

// 🧑‍💼 Cerrar votación
router.put("/cerrar/:id", verificarToken, soloAdmin, cerrarVotacion);

router.get("/cerradas", obtenerVotacionesCerradas);
router.get("/:id/resultados", obtenerResultadosVotacion);



export default router;
