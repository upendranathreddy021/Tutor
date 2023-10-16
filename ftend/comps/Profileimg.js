import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Gc from "./Gc";

let Profileimg=()=>{
    let [err,seterr]=useState(false)
    let [data,setdata]=useState({})
    let gobj=useContext(Gc)
useEffect(()=>{
    axios.get(`http://localhost:5000/getimg/${gobj.cont.uid}`,{"headers":{"Authorization":gobj.cont.token}}).then((res)=>{
        if(res.data=="img not found"){
            seterr(true)
        }
        else{
setdata(res.data)
        }
    }).catch((err)=>console.log(err))
},[])
console.log("this is img data",data)
    return(
        <div>
              <div><img src={`http://localhost:5000/imgsget/${data._id}`} alt="profile img"/></div>
            
        </div>
    )
}
export default Profileimg;