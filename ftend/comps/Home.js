import { useContext, useState } from "react";
import Gc from "./Gc";
import Ourservices_ad from "../admincomps/Ourservices_ad";
import Packages_ad from "../admincomps/Packages_ad";
import Contact from "./Contact";
import Courses from "./Courses";
let Home=()=>{

let gobj=useContext(Gc)

    return(
        <div>
            <h1>its home page</h1>
            <div>
            <div>
<Courses/>
            </div>
            <Contact/>
                

            </div>
        </div>
    )
}
export default Home;