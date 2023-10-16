let mongoose=require('mongoose')

let imgsch=new mongoose.Schema({
   "pimg":String,"uid":String
})
module.exports=mongoose.model("images",imgsch)