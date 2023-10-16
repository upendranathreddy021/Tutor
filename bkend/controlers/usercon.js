let Userdet=require('../models/usermodel')
let bcrypt=require('bcrypt')
let jwt=require('jsonwebtoken')
let {v4:uuidv4}=require('uuid')
let multer=require('multer')

let imgmodel=require("../models/imgmodel")
let Register= async(req,res)=>{
let check=await Userdet.findById({"_id":req.body._id});
if(check){
    res.send("email already exists")

}
else{
    let Hashcode=await bcrypt.hash(req.body.password,10)
    let data={...req.body, "password":Hashcode,"uid":uuidv4()}
    let DetailsSave=new Userdet(data)
    try{
    DetailsSave.save().then(()=>{
        res.send("Registration successfull")
    })
}
catch(err){
console.log(err)
}

}
}
//login code for backend

let Login=async(req,res)=>{

let Checkl=await Userdet.findById({"_id":req.body._id})

if(Checkl){
    let Checkpassword= await bcrypt.compare(req.body.password,Checkl.password)
console.log(Checkpassword)
    if(Checkpassword){
        
        let token=jwt.sign({"_id":req.body._id},"abcd")
        res.json({"token":token,"_id":Checkl._id,"uid":Checkl.uid,"name":Checkl.name,
    "phno":Checkl.phno,"dob":Checkl.dob,"role":Checkl.role})
    }
    else{
        res.send("invalid password")
    }
}
else{
    res.send("email doesnt exist")

    }}

    //islogin = to make all routes as secure
let Islogin=(req,res,next)=>{

    try{
        jwt.verify(req.headers.authorization,"abcd")
        next()

    }
    catch(err){
        res.send("invalid token")
    }
}

let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./prodimgs')
    },
    filename:function(req,file,cb){
        const uniqueSuffix=Date.now()+"-"+Math.round(Math.random()*1E9)
        cb(null,file.fieldname+'-'+uniqueSuffix+'.'+file.mimetype.split('/')[1])
    }
})
const upload=multer({storage:storage})

let upimg=async(req,res)=>{

let data=new imgmodel(req.body)

data.save().then(()=>{
    res.send("saved")
}).catch((err)=>console.log(err))

}

let getimg=async(req,res)=>{
    let data=await imgmodel.find({"uid":req.params.uid})
    if (data){
        res.json(data)
    }
    else{
        res.send('img not found')
    }
}
module.exports={Register,Login,Islogin,upload,upimg,getimg}