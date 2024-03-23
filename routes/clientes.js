import {Router} from 'express'
import httpClientes from '../controllers/clientes.js'
import httpVentas from '../controllers/ventas.js'
import helpersCategorias from '../helpers/categorias.js'
import { validarCampos } from '../middlewares/validar-campos.js'
import { check } from 'express-validator'


const router = Router()

router.get('/',httpClientes.getCliente)

router.post('/',httpClientes.postCliente)

router.put('/',httpClientes.putCliente)

router.put('/Activar/:id',httpClientes.putClienteActivar)

router.put('/Desactivar/:id',httpClientes.putClienteDesactivar)

export default router
