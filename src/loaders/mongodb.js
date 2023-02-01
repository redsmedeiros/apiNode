const mongoose = require('mongoose')

async function startDb(){

    //criar uma metodo await de conexao
    mongoose.set("strictQuery", true);
    await mongoose.connect('mongodb://127.0.0.1:27017/nodeCrudUm')

    console.log('Conectado ao MONGO')
}

startDb().catch((err) => console.log(err))

//exportar o mongoose
module.exports = startDb