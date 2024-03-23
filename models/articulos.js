import mongoose from "mongoose";

const articuloSchema=new mongoose.Schema({
    idcategoria:{type:mongoose.Schema.Types.ObjectId,ref:'Categoria',required:true,},
    nombre:{type:String,default:""},
    precio:{type:Number,default:0},
    stock:{type:Number,default:0},
    createAt:{type:Date,default:Date.now},
})

export default mongoose.model("Articulo",articuloSchema)