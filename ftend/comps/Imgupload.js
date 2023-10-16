import axios from 'axios'
import Gc from './Gc'
import { useContext, useState } from 'react'
let Imgupload=()=>{
    let gobj=useContext(Gc)
let [err,seterr]=useState()
let [data,setdata]=useState({})
    let imgfun=(e)=>{
        setdata({...data,"uid":gobj.cont.uid,[e.target.name]:e.target.files[0]})
    }

let upload=()=>{
    let formdata=new FormData()
        for(let k in data){
            formdata.append(k,data[k])
        }
      

axios.post("http://localhost:5000/addimg",formdata).then((res)=>{
    if(res.data=="saved"){
        seterr("image uploaded successfully")
    }
    else{
seterr("img failed to upload")
    }
})

}
    return(
        <div>
            <input type="file" name="pimg" onChange={imgfun}/>

            <button onClick={upload}>Sumbit</button>
            <p>{err}</p>
        </div>
    )
}
export default Imgupload;