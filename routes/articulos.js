import {Router} from 'express'
import httpArticulos from '../controllers/articulos.js'
// import helpersCategorias from '../helpers/categorias.js'
import { validarCampos } from '../middlewares/validar-campos.js'
import { check } from 'express-validator'
import helpersArticulos from '../helpers/articulos.js'

const router=Router()

router.get("/",httpArticulos.getArticulos)
router.get("/:id",httpArticulos.getArticulosID)

router.post("/",[
    check('idcategoria','Se necesita un mongoId valido').isMongoId(),
    check('idcategoria',).custom(helpersArticulos.validarIdArticulo),
    check('nombre','El nombre no puede estar vacio.').notEmpty(),
    check('precio','Solo numeros.').isNumeric(),
    check('stock','Solo numeros.').isNumeric(),

    validarCampos
],httpArticulos.postArticulos)

router.put("/nombre/:id",[
    check('idcategoria','Se necesita un mongoId valido').isMongoId(),
    check('nombre','El nombre no puede estar vacio.').notEmpty(),
    check('idcategoria',).custom(helpersArticulos.validarIdArticulo),
    validarCampos
],httpArticulos.putArticulosNombre)

router.put("/precio/:id",[
    check('id','Se necesita un mongoId valido').isMongoId(),
    check('precio','Solo numeros.').isNumeric(),
    check('id',).custom(helpersArticulos.validarExistaId),
    validarCampos
],httpArticulos.putArticulosPrecio)

router.put("/stock/:id",[
    check('id','Se necesita un mongoId valido').isMongoId(),
    check('stock','Solo numeros.').isNumeric(),
    check('id',).custom(helpersArticulos.validarExistaId),
    validarCampos
],httpArticulos.putArticulosStock)

router.delete("/:id",[
    check('id','Se necesita un mongoId valido').isMongoId(),
    check('id',).custom(helpersArticulos.validarExistaId),
    validarCampos
],httpArticulos.deleteArticulos)


export default router