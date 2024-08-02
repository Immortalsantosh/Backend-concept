const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  taste:{
    type:String,
    required:true,
    enum:["sweet", "spicy", "sour"]
  },
  is_drink:{
    type:Boolean,
    default:false
  },
  is_veg:{
    type:Boolean,
    default:true
  }
})



const Menuitem = mongoose.model('Menuitem', MenuSchema)
module.exports = Menuitem;

