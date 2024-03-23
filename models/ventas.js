import mongoose from "mongoose";

const ventaSchema = new mongoose.Schema({
    idCliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', require: true },
    nro: { type: String, unique: true },
    fecha: { type: Date, default: Date.now() },
    detalle: [{
        idArticulo: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', require: true },
        precio: { type: Number, require: true },
        cantidad: { type: Number, require: true }
    }],
    estado: { type: Number, default: 1 },
    createAT: { type: Date, default: Date.now() },
    descuento: { type: Number, default: 0 },
    iva: { type: Number, require: true },
    subtotal: { type: Number, require: true },
    total: { type: Number, require: true }
})





export default mongoose.model("Venta", ventaSchema)