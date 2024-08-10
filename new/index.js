const express = require('express')
const app = express();

const db = require('./db')  // impport or connection with index.js
require('dotenv').config(); // here config the dotenv folder 

//auth import
const passport= require('./auth') 
const LocalStrategy = require('passport-local').Strategy;      


//bodyparser.json() which is store in req.body
const bodyParser = require('body-parser') // use for data converted 
app.use(bodyParser.json()) 
const PORT = process.env.PORT || 3000 

// middleware  function
const logRequest = (req,res,next)=>{
console.log(`[${new Date().toLocaleString()}] request made to " ${req.originalUrl}"`)
next();
}
app.use(logRequest)

//password initionaton and authemtication
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', { session: false });

app.get('/' , function (req,res){
res.send("welcome to my hotel")
})






// import the personRoutes
const personRoutes = require('./routes/personRoutes')
const MenuitemRoutes = require('./routes/MenuitemRoutes')

//use the routes 
app.use('/person' , localAuthMiddleware ,personRoutes)
app.use('/Menu' ,MenuitemRoutes)



//port assign 

app.listen(PORT ,()=>{
    console.log('Server is running on port 3000')
})