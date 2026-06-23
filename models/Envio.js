const mongoose = require('mongoose');

const envioSchema = new mongoose.Schema(
{
    pedidoId: {
        type: String,
        required: true,
        unique: true
    },
    remitente: {
        type: String,
        required: true
    },
    destinatario: {
        type: String,
        required: true
    },
    direccionEntrega: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        enum: ['pendiente', 'en tránsito', 'entregado'],
        default: 'pendiente'
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('Envio', envioSchema);