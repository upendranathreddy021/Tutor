let mongoose=require('mongoose')
let packsch=new mongoose.Schema({
    "role":String,"coursenames":String,"Price":Number,"desc":String,'valid':String
})
module.exports=mongoose.model("Packages",packsch)