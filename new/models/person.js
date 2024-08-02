const mongoose = require('mongoose')

// define person scheme 
const personSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
age: {
    type:Number,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
phone: {
    type:Number,
    require:true
    },
    work:{
        type:String,
        required:true,
        enum:['chef' ,"waiter", 'helper']

    }
})
// create model
const Person = mongoose.model('Person', personSchema)
module.exports =Person;