let mongoose=require('mongoose')
let servsch=new mongoose.Schema({
    "coursename":String,"week":String,"time":String,"desc":String,"courses":String,"duration":Number,
"teachname":String,"contact":String,"email":String,"address":{"type":String,"default":"Ameerpet,Hyderabad"}
})
module.exports=mongoose.model("/Services",servsch)
