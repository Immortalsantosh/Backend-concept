const express = require('express')
const router = express.Router();
const Menuitem = require('./../models/Menuitem')


router.post('/' , async (req,res)=>{
    try{

        const data = req.body // assuming the request body contains the person data
    
        //creaate a new person to the database
        const newMenu = new Menuitem(data);   // here Menu is same where import 
    
        //save the new person to the database
        const response =  await newMenu.save()
        console.log("data saved")
        res.status(201).json(response)
    
    }catch(err) {
               console.error('Error:', err.message);
               res.status(500).json({ error: 'Internal error' });
             }
})     

// Get method to show the data who save in database 
router.get('/' , async (req, res) =>{
    try{
        const data = await Menuitem.find()
        console.log("data fetch")
        res.status(200).json(data)
        }catch(err){

            console.log("internal error")
            res.status(500).json({error:'internal error'})
        }
            })

  router.get("/:Taste", async (req, res) => {
    try {
      const Taste = req.params.Taste; // extract the taste types form url

      if (Taste == "sweet" || Taste == "spicy" || Taste == "sour") {
        const data = await Menuitem.find({ taste: Taste });
        console.log("response.fetch");
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "invaild TasteTpye" });
      }
    } catch(err){

        console.log("internal error")
        res.status(500).json({error:'internal error'})
    }
  });            

 module.exports =router;