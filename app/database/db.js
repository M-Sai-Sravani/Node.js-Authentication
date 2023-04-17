require('dotenv').config()
const mongoose = require('mongoose');
exports.connectMonggose =()=>{
    mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((e)=>console.log("Connected to Mongodb =>> Node-Authentication"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
