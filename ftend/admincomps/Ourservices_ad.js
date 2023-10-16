import axios from "axios";
import '../csscomps/Ourservices_ad.css'
import { useState } from "react";
let Ourservices_ad=()=>{
    let [err,seterr]=useState("")
let [detail,setdetail]=useState({"coursename":"","courses":"","week":"","time":"","desc":"","duration":1,
"teachname":"","contact":"","email":"","address":""})

let detailfun=(e)=>{
    setdetail({...detail,[e.target.name]:e.target.value})
}
let detsubmit=()=>{
    axios.post("http://localhost:5000/admin/servdet",detail).then((res)=>{
        if(res.data=="details saved"){
            seterr('details submitted successfully')
        }
        else{
            seterr("failed to submit")
        }
    }).catch((err)=>console.log(err))
}
console.log(detail)

    return(
        <div className="serv">
<p>Course Name</p>
<input type="text" name="coursename" placeholder="Course Name" value={detail.coursename} onChange={detailfun}/>
<p>Course Types</p>
<input type="text" name="courses" placeholder="Course subjects" value={detail.courses} onChange={detailfun}/>
<p>NO of Weeks</p>
<input type="text" name="week" value={detail.week}  placeholder="Week" onChange={detailfun}/>
<p>Start Time</p>
<input type="time" name="time" value={detail.time}  placeholder="Time" onChange={detailfun}/>
<p>Duration in Hours</p>
<input type="number" name="duration"  placeholder="Duration in Hours" value={detail.duration} onChange={detailfun}/>
<p>Tutor Name</p>
<input type="text" name="teachname" value={detail.teachname}  placeholder="Teacher Name" onChange={detailfun}/>
<p>Contact</p>
<input type="text" name="contact" value={detail.contact}  placeholder="Contact" onChange={detailfun}/>
<p>Email</p>
<input type="email" name="email" value={detail.email}  placeholder="Email" onChange={detailfun}/>
<p>Description</p>
<textarea name="desc" value={detail.desc}  placeholder="Description" onChange={detailfun}></textarea>

<button onClick={detsubmit}>Submit</button>
<p>{err}</p>
        </div>
    )
}
export default Ourservices_ad;