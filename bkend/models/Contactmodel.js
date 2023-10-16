let mongoose=require('mongoose')
let consch=new mongoose.Schema({
    "firstname":String,"lastname":String,"email":String,"message":String
})
module.exports=mongoose.model("Contactdetails",consch)
