import '../csscomps/Contact.css'
import axios from 'axios'
import {useState} from 'react'

let Contact=()=>{
let [data,setdata]=useState({"firstname":"","lastname":"","email":"","message":""})
let [err,seterr]=useState("")

let datafun=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
}

let subfun=()=>{
    axios.post("http://localhost:5000/career/contact",data).then((res)=>{
        

    if(res.data=="saved"){
seterr("details saved")
    }
    else{
        seterr("details failed to save")
    }
    }).catch((err)=>console.log(err))
    setdata({"firstname":"","lastname":"","email":"","message":""})
}
console.log(data)
    return(

<div className="contpage">
    <div className="page1">
                <div className="page11">
                    <p>Contact Me &</p>
                    <p>And get Shared</p>

                </div>
                <div className="page12">
                    <p>logo</p>
                </div>
    </div>


    <div className="page2">

       <div className="page21">
        <div className="inputs">
                                <div className="names">
                                    <h3>First Name</h3>
                                <input type="text" name="firstname" value={data.firstname} onChange={datafun}/>
                                </div>
                                <div>
                                    <h3>Last Name</h3>
                                <input type="text" name="lastname" value={data.lastname} onChange={datafun} />
                                </div>
                </div>
                    <h3>Email</h3>
                    <input type="email" name="email" value={data.email} onChange={datafun}/>
                    <h3>Message</h3>
                    <textarea name="message" value={data.message} onChange={datafun}></textarea>
                    <br/>
                    <button onClick={subfun}>submit</button>
                    <p>{err}</p>
            </div>

            <div className="page22">
                            <div className="topics">
                            <p>types of contents</p>
                            </div>
                            <div className="details">
                            <p>upendrareddy021@gmail.com</p>
                            <p>+91 9493115429</p>
                            </div>
                            <div className="copyrights">
                            <p>copyrights</p>
                            </div>
            </div>
    </div>
</div>
    )
}
export default Contact;
