const express = require('express')
const app = express();

const db = require('./db')  // impport or connection with index.js

app.get('/' , function (req,res){
res.send("welcome to my hotel")
})



//bodyparser.json() which is store in req.body
const bodyParser = require('body-parser') // use for data converted 
app.use(bodyParser.json()) 




// import the personRoutes
const personRoutes = require('./routes/personRoutes')
const MenuitemRoutes = require('./routes/MenuitemRoutes')

//use the routes 
app.use('/person' ,personRoutes)
app.use('/Menu' ,MenuitemRoutes)



//port assign 

app.listen(3000 ,()=>{
    console.log('Server is running on port 3000')
})