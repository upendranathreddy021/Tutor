import { Link, useNavigate } from "react-router-dom";
import '../csscomps/Adminportal.css'
let AdminPortal=()=>{

let navigate=useNavigate()
let totaldetfun=()=>{
    navigate('/totaldetails')
}
    return(
        <div className="main">
            <div className="main1">

<h1><Link to='/Packages_ad'>Packages Provider</Link></h1>
<h1><Link to='/Ourservices_ad'>Services Provider</Link></h1>

            </div>
            <div className="main2">
<button onClick={totaldetfun}>Total detail</button>
            </div>
        </div>
    )
}
export default AdminPortal;