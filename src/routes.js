const { Router } = require('express')

const ProductController = require('./controlllers/ProductCOntroller')

const routes = Router()

routes.get('/health', (req, res)=>{

    return res.status(200).json({message: 'Servidor rodando'})
})

routes.post('/products', ProductController.store)
routes.get('/products', ProductController.index)

module.exports = routes