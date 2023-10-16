import axios from "axios";
import { useState } from "react";
import '../csscomps/Ourservices_ad.css'
let Packages_ad=()=>{
    let [err,seterr]=useState("")
let [detail,setdetail]=useState({"role":"","coursenames":"","Price":0,"desc":"",'valid':""})
    
let detfun=(e)=>{
setdetail({...detail,[e.target.name]:e.target.value})
}
let subfun=()=>{
axios.post("http://localhost:5000/admin/packdet",detail).then((res)=>{
    if(res.data=="details saved"){
        seterr("details saved")
    }
    else{
        seterr("failed to submit")
    }
}).catch((err)=>console.log(err))
setdetail({"role":"","coursenames":"","Price":0,"desc":"",'valid':""})
}


return(
        <div className="serv">
        <p>Role</p>
    <input type="text" name="role" value={detail.role} onChange={detfun} placeholder="Role"/>
   <p>Course Names</p>
    <input type="text" name="coursenames" value={detail.coursenames} placeholder="Course Names" onChange={detfun}/>
    <p>Price</p>
    <input type="number" name="Price" value={detail.Price} placeholder="Price" onChange={detfun}/>
   <p>Description</p>
    <input type="text" name="desc" value={detail.desc} placeholder="Description" onChange={detfun}/>
   <p>valid</p>
    <input type="date" name="valid" value={detail.valid} onChange={detfun}/>
    <button onClick={subfun}>Sumbit</button>

    <p>{err}</p>
        </div>
    )
}
export default Packages_ad;