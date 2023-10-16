import axios from "axios";
import { useEffect, useState } from "react";

let Ourservices=()=>{
    let [data,setdata]=useState({})
    let [err,seterr]=useState(false)

    useEffect(()=>{
        axios.get("http://localhost:5000/admin/service").then((res)=>{
        if(res.data=="empty"){
            setdata(res.data)
        }
        else{
            seterr(true)
        }
        })
    },[])

    return(
        <div>
            
        </div>
    )
}
export default Ourservices;