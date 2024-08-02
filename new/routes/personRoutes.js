const express = require('express')
const router = express.Router();
const Person=  require('./../models/person')  // person schema import



// post method to save client data(person) into database by post method
router.post('/' , async (req, res) =>{
    try{
    
        const data = req.body // assuming the request body contains the person data
    
        //creaate a new person to the database
        const newPerson = new Person(data);
    
        //save the new person to the database
        const response =  await newPerson.save()
        console.log("data saved")
        res.status(201).json(response)
    }
        catch(err) {
            console.error('Error:', err.message);
            res.status(500).json({ error: 'Internal error' });
          }
    })


    // Get method to show the data who save in database 

router.get('/' , async (req, res) =>{
    try{
        const data = await Person.find()
        console.log("data fetch")
        res.status(200).json(data)
        }catch(err){
            console.log("internal error")
            res.status(500).json({error:'internal error'})
        }
            })

router.get('/:workType' , async(req ,res)=>{
    try{
        const workType = req.params.workType   // extract the work types form url 

     if(workType=='chef' || workType=='waiter' || workType=='manager'){
        const response = await Person.find({work :workType})
        console.log('response.fetch')
        res.status(200).json(response)

        }else{
            res.status(404).json({error : "invaild workType"})
        }
    }catch(err){
        console.log("internal error")
        res.status(500).json({error:'internal error'})
    }
})            



module.exports =router;