const express = require('express');
const router = express.Router();

const {
    crearEnvio,
    obtenerEnvios,
    obtenerEnvioPorId,
    actualizarEnvio,
    eliminarEnvio
} = require('../controllers/envioController');

router.post('/', crearEnvio);
router.get('/', obtenerEnvios);
router.get('/:id', obtenerEnvioPorId);
router.put('/:id', actualizarEnvio);
router.delete('/:id', eliminarEnvio);

module.exports = router;