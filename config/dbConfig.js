
const mongoose = require('mongoose')
const color = require('cli-colors')

const connectDb = async () => {
    try {
        //setup mongooses Link
       const connect = await mongoose.connect("mongodb+srv://ajitsah:Ajitsah%40187@apishoes.ptkrkw2.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "products"
      })
        console.log(color.bgMagenta(`connected to database🟢: host: ${connect.connection.host}`))
    } catch (error) {
        console.log(color.bgRed(`Error: ${error.message || 'failed to connect database'}`))
        process.exit(1)
    }
}

module.exports = connectDb;