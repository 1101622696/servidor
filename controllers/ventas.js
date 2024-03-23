import Venta from "../models/ventas.js";

const httpVentas = {
    getVentasPorFecha: async (req, res) => {
        const { fecha } = req.query
        const venta = await Venta.find(
            {
                $or: [
                    { fecha: new RegExp(fecha, "i") },
                ]
            }
        )
        res.json({ venta })
    },
    getVentasPorId: async (req, res) => {
        const { id } = req.params
        const venta = await Venta.findById(id);
        res.json({ venta })
    },
    postVentas: async (req, res) => {
        const { idCliente, nro, detalle, descuento, iva } = req.body
        const venta = new Venta({ idCliente, nro, detalle: [detalle.idArticulo, detalle.precio, detalle.cantidad], descuento, iva })
        await venta.save()
        res.json({ venta })
    },
    putVentasActivar: async (req, res) => {
        const { id } = req.params
        const venta = await Venta.findByIdAndUpdate(id, { estado: 1 }, { new: true })
        res.json({ venta })
    },
    putVentasDesactivar: async (req, res) => {
        const { id } = req.params
        const venta = await Venta.findByIdAndUpdate(id, { estado: 0 }, { new: true })
        res.json({ venta })
    },
};



export default httpVentas