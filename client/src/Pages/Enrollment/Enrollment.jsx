import React from "react";

import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Enrollment.css";
import Footer from '../../Components/footer'
import EnrollBox from '../../Components/Enrollment/EnrollBox'

function Enrollment(){
    return(
        <div className="enroll-container">
            <div className="enroll-page">
                <div className="enroll-page-title"><p>Enroll</p></div>
                <div className="enroll-components">
                    <EnrollBox/>
                    <Footer/>
                    
                    </div>

            </div>
            
            <Sidebar
                    buttonState={{
                    item1: false,
                    item2: false,
                    item3: true,
                    item4: false,
                    item5: false,
                }}/>
        </div>
    )
}
export default Enrollment