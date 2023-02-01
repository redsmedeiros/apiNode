const { Router } = require('express')

const routes = Router()

routes.get('/health', (req, res)=>{

    return res.status(200).json({message: 'Servidor rodando'})
})

module.exports = routes