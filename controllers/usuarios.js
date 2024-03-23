

import Usuario from "../models/usuarios.js"

const httpUsuarios={

postUsuario: async (req, res) => {
          
  const { nombre, cc, password,rol } = req.body;
  const usuario = new Usuario({ nombre, cc, password,rol});

  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt)

  await usuario.save()

  res.json({
      usuario
  })
},




login: async (req, res) => {
  const { cc, password} = req.body;
 

  try {
      const user = await Usuario.findOne({ cc })
      if (!user) {
          return res.status(401).json({
              msg: "Usuario / Password no son correctos"
          })
      }

      if (user.estado === 0) {
          return res.status(401).json({
              msg: "Usuario / Password no son correctos"
          })
      }

      const validPassword = bcryptjs.compareSync(password, user.password);
      if (!validPassword) {
          return res.status(401).json({
              msg: "Usuario / Password no son correctos"
          })
      }


      const token = await generarJWT(user._id,user.rol);
      res.json({
          usuario: user,
          token
      })

  } catch (error) {

      return res.status(500).json({


          msg: "Hable con el WebMaster"
      })
  }
}

}

export default httpUsuarios