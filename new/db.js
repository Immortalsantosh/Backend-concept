const mongoose = require('mongoose'); //its work like a bridge btw nodejs and mongdb database
require('dotenv').config();


//define mongoose connection url with file namme Zspire if not availabe than create automatically 
// its connection locally and globally
 const MongoUrl = process.env.MONGODB_URL_LOCAL
// const MongoUrl = process.env.MONGODB_URL 


// set up mongoose connection it's is fixed connection
mongoose.connect(MongoUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 

}) 

//get the default connection
// mongoose maintain a default connection oject reprensetion in mongodb
const db = mongoose.connection; //it's a connection object

//define event listener for database
db.on('connected',()=>{
    console.log('connected to database')
})

db.on('error' ,()=>{
    console.error("something went wrong")
})

db.on('disconnected' ,()=>{
    console.log('database disconnected')
})

module.exports.db = db