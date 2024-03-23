import Cliente from "../models/clientes.js";


const httpClientes = {
    getCliente: async (req, res) => {

    },
    postCliente: async (req, res) => {
        const { nombre, apellido, telefono, correo } = req.body
        const cliente = new Cliente({ nombre, apellido, telefono, correo})
        await cliente.save()
        res.json({ cliente })
    },
    putCliente: async (req, res) => {
        const { id } = req.params
        const { nombre, apellido, telefono, correo, compras } = req.body
        switch (true) {
            case nombre != undefined:
                const clienteN = await Cliente.findByIdAndUpdate(id, { nombre }, { new: true })
                res.json({ clienteN })
                break;
            case apellido != undefined:
                const clienteA = await Cliente.findByIdAndUpdate(id, { apellido }, { new: true })
                res.json({ clienteA })
                break;
            case telefono != undefined:
                const clienteT = await Cliente.findByIdAndUpdate(id, { telefono }, { new: true })
                res.json({ clienteT })
                break;
            case correo != undefined:
                const clienteC = await Cliente.findByIdAndUpdate(id, { correo }, { new: true })
                res.json({ clienteC })
                break;
            case compras != undefined:
                const clienteCO = await Cliente.findByIdAndUpdate(id, { compras }, { new: true })
                res.json({ clienteCO })
                break;

            default:
                break;
        }
    },
    putClienteActivar: async (req, res) => {
        const { id } = req.params
        const cliente = await Cliente.findByIdAndUpdate(id, { estado: 1 }, { new: true })
        res.json({ cliente })
    },
    putClienteDesactivar: async (req, res) => {
        const { id } = req.params
        const cliente = await Cliente.findByIdAndUpdate(id, { estado: 0 }, { new: true })
        res.json({ cliente })
    }
}




export default httpClientes