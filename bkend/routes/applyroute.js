const {applydetail,getapply}=require('../controlers/applydet')
const {Islogin}=require('../controlers/usercon')
const {contact,getcont}=require('../controlers/visitors')
const express=require('express');
let applyr=new express.Router()
applyr.post("/apply",Islogin,applydetail)
applyr.get("/getapply/:uid",Islogin,getapply)
//contact details routes post and get
applyr.post("/contact",contact)
applyr.get("/getcont",getcont)
module.exports=applyr