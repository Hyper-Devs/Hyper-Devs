import React from "react";

import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Enrollment.css";
import Footer from '../../Components/footer'
import EnrollBox from '../../Components/Enrollment/EnrollBox'
import EnrollStudentBox from "../../Components/Enrollment/Enroll-Student-Box";
import EnrollBatchStudentBox from "../../Components/Enrollment/Enroll-Batch-Student-Box";
import EnrollaStudentBox from "../../Components/Enrollment/Enroll-a-Student-Box";
import EnrollanAdminBox from "../../Components/Enrollment/Enroll-an-Admin-Box";

function Enrollment(){
    return(
        <div className="enroll-container">
            <div className="enroll-page">
                <div className="enroll-page-title"><p>System Enroll</p></div>
                <div className="enroll-components">
                    {/* <EnrollBox/>
                    <EnrollStudentBox/>
                    <EnrollBatchStudentBox/> */}
                    {/* <EnrollaStudentBox/> */}
                    <EnrollanAdminBox/>
                    {/* <Footer/> */}
                    
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