let contmodel=require('../models/Contactmodel')
let contact=async(req,res)=>{
let data=new contmodel(req.body)
data.save().then(()=>{
    res.send("saved")

}).catch((err)=>console.log(err))

}

//getting details

let getcont=async(req,res)=>{

try{
    let data=await contmodel.find()
    res.send(data)
}
catch(err){
    console.log(err)
}

}
module.exports={contact,getcont}