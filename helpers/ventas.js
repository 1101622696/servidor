import Venta from "../models/ventas"

const helpersVentas = {
    validarCantidad: async (cantidad) =>{
        const venta = await Venta.find({cantidad})
    }
}