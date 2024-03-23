import Articulo from "../models/articulos.js"


const httpArticulos = {

    getArticulos: async (req, res) => {
        const articulos = await Articulo.find()
        res.json({ articulos })
    },

    getArticulosID: async (req, res) => {
        const { id } = req.params
        const articulos = await Articulo.findById(id)
        res.json({ articulos })
    },

    postArticulos: async (req, res) => {
        try {
            const { idcategoria,nombre, precio, stock } = req.body
            const articulo = new Articulo({ idcategoria,nombre, precio, stock })
            await articulo.save()
            res.json({ articulo })
        } catch (error) {
            res.status(400).json({ err: "No se pudo crear el articulo" })
        }
    },
    putArticulosNombre: async (req, res) => {
        const { id } = req.params
        const {nombre} = req.body
        const articulo= await Articulo.findByIdAndUpdate(id,{nombre},{new:true})
        res.json({articulo})
    },
    putArticulosPrecio: async (req, res) => {
        const { id } = req.params
        const {precio} = req.body
        const articulo= await Articulo.findByIdAndUpdate(id,{precio},{new:true})
        res.json({articulo})
    },
    putArticulosStock: async (req, res) => {
        const { id } = req.params
        const {stock} = req.body
        const articulo= await Articulo.findByIdAndUpdate(id,{stock},{new:true})
        res.json({articulo})
    },
    deleteArticulos: async (req, res) => {
        const { id } = req.params
        const articulo = await Articulo.findByIdAndDelete(id)
        res.json({articulo})
    }
}

export default httpArticulos