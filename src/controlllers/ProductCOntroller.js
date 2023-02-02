const ProductModel = require('../models/ProductModels')

class ProductController{
    //cria um produto
    async store(req, res){

        const { title, description, price} = req.body

        if(!title){
            return res.status(400).json({message: 'Titulo não existe'})
        }

        if(!description){
            return res.status(400).json({message: 'Descrição não existe'})
        }

        if(!price){
            return res.status(400).json({message: 'Preço não existe'})
        }

        const productAlreadyExists = await ProductModel.findOnde({title: title})

        if(productAlreadyExists){
            return res.status(400).json({message: 'Produto já cadastrado'})
        }

        const createdProduct = await ProductModel.create(req.body)

        return res.status(200).json(createdProduct)

    }

    //listar todos
    async index(req, res){

        const products = await ProductModel.find()

        return res.status(200).json(products)

    }

    //mostrar um produto especifico
    async show(req, res){

        try{

            const { id } = req.params

            const product = await ProductModel.findById(id)

            if(!product){

                return res.status(404).json({message: 'Produto não existe'})
            }

            return res.status(200).json(product)

        }catch(err){

            return res.status(404).json({message: 'Verifique o id'})

        }

      

    }

    //faz a atualização do nosso produto
    async update(req, res){

        try{

            const { id } = req.params

            await ProductModel.findByIdAndUpdate(id, req.body)

            return res.status(200).json({message: 'Produto Atualizado com Sucesso'})

        }catch(err){

            return res.status(404).json({message: 'Falha ao atualizar produtos' + err})

        }

    }

    //deleta nosso produto
    async destroy(req, res){

       try{

            const { id } = req.params

            const productDeleted = await ProductModel.findByIdAndDelete(id)

            if(!productDeleted){

                return res.status(404).json({message: 'Produto não existe'})
            }

            return res.status(200).json({message: 'Produto deletado'})

       }catch(err){

            return res.status(404).json({message: 'Falha ao atualizar produtos' + err})

       }

    }
}

module.exports = new ProductController()