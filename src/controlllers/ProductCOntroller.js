const ProductModel = require('../models/ProductModels')

class ProductController{
    //cria um produto
    async store(req, res){

        const createdProduct = await ProductModel.create(req.body)

        return res.status(200).json(createdProduct)

    }

    //listar todos
    async index(req, res){

        const products = await ProductModel.find()

        return res.status(200).json(products)

    }

    //mostrar um produto especifico
    async show(){

    }

    //faz a atualização do nosso produto
    async update(){

    }

    //deleta nosso produto
    async destroy(){

    }
}

module.exports = new ProductController()