import "./Enroll-Batch-Student-Incoming-Box.css";
import React from "react";

function EnrollBatchStudentIncomingBox(){
    return(
        <div className="enroll-batch-student-incoming-container">
            <div className="EBS-incoming-container1">
                <div className="EBS-incoming-header-container1">Student Enroll | Batch Enroll | Incoming Students </div>
                <div className="EBS-section">
                    <div className="EBS-selection-section">
                        <div className="EBS-selection-GL"><p>Grade Level</p>
                            <div className="EBS-GL-drop"></div>
                        </div>
                        <div className="EBS-selection-Sec"><p>Section</p>
                            <div className="EBS-Sec-drop"></div>
                        </div>
                    </div>
                    <div className="EBS-enter-bttn">
                        <button className="EBS-ENTER-button">Enter</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default EnrollBatchStudentIncomingBox