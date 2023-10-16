import axios from "axios";
import { useEffect, useState } from "react";
import '../csscomps/Packages.css'
let Packages=()=>{
let [data,setdata]=useState({})
let [err,seterr]=useState(false)

useEffect(()=>{
    axios.get("http://localhost:5000/admin/packages").then((res)=>{
        
    if(res.data=="err"){
        seterr(true)
    }
    else{
        setdata(res.data)

    }
    }).catch((err)=>console.log(err))
},[])


console.log("data for packages",data,"length ",data.length)
    return(
        <div className="package">
        {
            (!err) ?(
              data.map((item,index)=>{

                return(
                    <div key={index} className="types">
                   
                    <div className="pcont">
                    <h3 className="cn">{item.coursenames}</h3>
                    <h1 className="price"><span>Rs : </span> {item.Price} /-</h1>
                    
                    <p className="valid"><span>Valid upto : </span>{item.valid}</p>
                   <center> <button>Select</button></center>
                    <p className="role">{item.role}</p>
                    </div>
                    <div className="ccont">
                    {[
                        {"cond":(item.role=="backend"),"cont":(<div>
                            <p>Unlimited Practical Materials</p>
                            <p>Weekly Assignments</p>
                            <p>Online resources</p>
                        </div>)},{"cond":(item.role=="frontend"),"cont":(<div>
                        <p>Priority Support</p>
                        <p>Pdf Availability</p>
                        <p>Unlimited lessons</p>
                        </div>
                        )},{"cond":(item.role=="cloud"),"cont":(<div> 
                        <p>Unlimited Practical Materials</p>
                        <p>Online Assignments</p>
                        </div>)},{"cond":(item.role=="dbms"),"cont":(<div>
                            <p>Online resources</p>
                            
                        </div>)}
                    ].map((item,index)=>(item.cond ? item.cont:null))}
                    </div>
                    </div>
                )
            })):(<h1>error in reloading</h1>)
        }

        </div>
    )
}
export default Packages;