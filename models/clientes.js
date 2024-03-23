import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    telefono: { type: Number },
    correo: { type: String },
    compras: [{
        idArticulo: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', require: true },
        precio: { type: Number, require: true },
        cantidad: { type: Number, require: true }
    }]
})

export default mongoose.model("Cliente", clienteSchema);