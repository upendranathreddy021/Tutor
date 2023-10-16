let {Register,upload,upimg,Login,Islogin, getimg}=require('../controlers/usercon')
let express=require('express')
let route=new express.Router()
route.post("/register",Register)
route.post("/login",Login)
route.get("/getimg/:uid",getimg)
route.post('/addimg',upload.single('pimg'),upimg)

module.exports=route