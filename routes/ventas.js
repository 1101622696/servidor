import { Router } from 'express'
import httpVentas from '../controllers/ventas.js'
import helpersVentas from '../helpers/ventas.js.js'
import { validarCampos } from '../middlewares/validar-campos.js'
import { check } from 'express-validator'

const router = Router();

router.get('/', httpVentas.getVentasPorFecha)

router.get('/id:', httpVentas.getVentasPorId)

router.post('/',[
    check('detalle.cantidad').custom(helpersVentas),
    validarCampos
], httpVentas.postVentas)

router.put('/Desactivar/:id', httpVentas.putVentasDesactivar)

router.put('/Activar/:id', httpVentas.putVentasActivar)

export default router