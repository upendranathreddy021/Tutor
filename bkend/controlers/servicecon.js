let servmodel=require('../models/servicemodel')
let packmodel=require('../models/packages')
let servdet=async(req,res)=>{
let data=new servmodel(req.body)
data.save().then(()=>{
    res.send("details saved")
}).catch((err)=>console.log(err))
}

let packdet= async(req,res)=>{
let data=new packmodel(req.body)
data.save().then(()=>{
res.send('details saved')
}).catch((err)=>console.log(err))
}

//geting courses data for ourservice page

let getserv=async(req,res)=>{
    
    let data=await servmodel.find()

    if(data.length!=0){
    res.json(data)
    }
    else{
        res.send("empty")
    }
}

//geting packages data for packages page

let getpack=async(req,res)=>{


try{
    let data= await packmodel.find()
res.json(data)
}
catch(err){
res.send("err")
console.log(err)
}
}
module.exports={servdet,packdet,getserv,getpack}