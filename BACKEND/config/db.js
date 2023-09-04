const mongoose = require("mongoose");
const colors = require('colors');

const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGODB_URL)

        console.log(`✅MongoDB Connected: ${con.connection.host}`.cyan.underline)
    }catch(error){
        console.error(`❌Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB