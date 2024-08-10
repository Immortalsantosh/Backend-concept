const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

    },
    username:{
         required:true,
         type:String,
    },
    password:{
        required:true,
        type:String,
    }
})

personSchema.pre('save', async function(next) {
    const person = this;

    // Hash the password only if it has been modified (or is new)
    if (!person.isModified('password')) return next();

    try {
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);

        // Override the plain password with the hashed one
        person.password = hashedPassword;
        next();
    } catch (err) {
        return next(err);
    }
});


personSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw err;
    }
};




// create model
const Person = mongoose.model('Person', personSchema)
module.exports =Person;