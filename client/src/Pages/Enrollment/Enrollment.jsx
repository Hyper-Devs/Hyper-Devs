import React, { useState } from "react";

import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Enrollment.css";
import Footer from '../../Components/footer'
import EnrollBox from '../../Components/Enrollment/EnrollBox'
import EnrollStudentBox from "../../Components/Enrollment/Enroll-Student-Box";
import EnrollBatchStudentBox from "../../Components/Enrollment/Enroll-Batch-Student-Box";
import EnrollaStudentBox from "../../Components/Enrollment/Enroll-a-Student-Box";
import EnrollanAdminBox from "../../Components/Enrollment/Enroll-an-Admin-Box";
import EnrollBatchStudentIncomingBox from "../../Components/Enrollment/Enroll-Batch-Student-Incoming-Box";
import EnrollBatchStudentNYBox from "../../Components/Enrollment/Enroll-Batch-Student-NewYear-Box";
import EnrollBatchStudentNewYearResult from "../../Components/Enrollment/Enroll-Batch-Student-NY-Result-Box";
import EnrollBatchStudentIncomingResult from "../../Components/Enrollment/Enroll-Batch-Student-I-Result-Box";

function Enrollment() {
    const [active, setActive] = useState("start");

    const handleButtonClick = (buttonId) => {
        setActive(buttonId)
    };

    return (
        <div className="enroll-container">
            <div className="enroll-page">
                <div className="enroll-page-title" ><p>System Enroll</p></div>
                <div className="enroll-components">
                    {active === "start" && <EnrollBox onButtonClick={handleButtonClick} />}
                    {active === "enStud" && <EnrollStudentBox onButtonClick={handleButtonClick} />}
                    {active === "enAdm" && <EnrollanAdminBox onButtonClick={handleButtonClick} />}
                    {active === "enStud-indi" && <EnrollaStudentBox />}
                    {active === "enStud-batch" && <EnrollBatchStudentBox onButtonClick={handleButtonClick} />}
                    {active === "enStud-batch-incoming" && <EnrollBatchStudentIncomingBox onButtonClick={handleButtonClick} />}
                    {active === "enStud-batch-new" && <EnrollBatchStudentNYBox onButtonClick={handleButtonClick} />}
                    {active === "enStud-batch-incoming-result" && <EnrollBatchStudentIncomingResult onButtonClick={handleButtonClick} />}
                    {active === "enStud-batch-new-result" && <EnrollBatchStudentIncomingResult onButtonClick={handleButtonClick} />}
                    
                    <Footer/>
                </div>
            </div>

            <Sidebar/>
        </div>
    )
}
export default Enrollment