
import mongoose from "mongoose";


const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  password: { type: String, require:true },
  cc: { type: Number, require:true }
})

  export default mongoose.model("Usuario", usuarioSchema);