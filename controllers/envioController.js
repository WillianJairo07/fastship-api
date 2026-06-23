const Envio = require('../models/Envio');

// Crear envío
const crearEnvio = async (req, res) => {
    try {
        const envio = await Envio.create(req.body);
        res.status(201).json(envio);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Obtener todos los envíos
const obtenerEnvios = async (req, res) => {
    try {
        const envios = await Envio.find();
        res.json(envios);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Obtener por ID
const obtenerEnvioPorId = async (req, res) => {
    try {
        const envio = await Envio.findById(req.params.id);

        if (!envio) {
            return res.status(404).json({ mensaje: 'Envío no encontrado' });
        }

        res.json(envio);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Actualizar estado
const actualizarEnvio = async (req, res) => {
    try {
        const envio = await Envio.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!envio) {
            return res.status(404).json({ mensaje: 'Envío no encontrado' });
        }

        res.json(envio);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Eliminar envío
const eliminarEnvio = async (req, res) => {
    try {
        const envio = await Envio.findByIdAndDelete(req.params.id);

        if (!envio) {
            return res.status(404).json({ mensaje: 'Envío no encontrado' });
        }

        res.json({ mensaje: 'Envío eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    crearEnvio,
    obtenerEnvios,
    obtenerEnvioPorId,
    actualizarEnvio,
    eliminarEnvio
};