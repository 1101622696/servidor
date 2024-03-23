import Articulo from "../models/articulos.js"

const helpersArticulos={
    validarIdArticulo:async (idArticulo)=>{
        const existe = await Articulo.find({idArticulo})
        if (!existe){
            throw new Error ("Categoria del articulo Existe")
        }
    },
    validarExistaId:async (id)=>{
        const existe = await Articulo.findById(id)
        if (existe==undefined){
            throw new Error ("Id no existe")
        }
    }
}

export default helpersArticulos