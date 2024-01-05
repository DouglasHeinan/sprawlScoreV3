const mongoose = require("mongoose");

const connectDB = async () => {
    console.log(process.env.DATABASE_URI)
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;