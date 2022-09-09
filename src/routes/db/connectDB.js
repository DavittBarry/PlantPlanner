const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// For execution path to work correctly you need to node connectDB.js inside this folder
// dotenv.config({ path: '../../config/config.env' })

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI_PLANT)
        console.log('MongoDB connected: '+conn.connection.host)
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
}

connectDB()
module.exports = connectDB