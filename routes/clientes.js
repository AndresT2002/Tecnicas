const express = require('express')
const router=express.Router()


const clienteController=require('../controllers/clienteController')
router.get('/')
router.get('/modificar',clienteController.mostrar)
router.post('/crear',clienteController.crearCliente)
router.post('/edit/:id',clienteController.editar)
router.get('/eliminar/:id',clienteController.borrar)
module.exports=router


