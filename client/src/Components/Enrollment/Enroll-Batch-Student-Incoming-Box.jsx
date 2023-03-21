import "./Enroll-Batch-Student-Incoming-Box.css";
import React from "react";

function EnrollBatchStudentIncomingBox(){
    return(
        <div className="enroll-batch-student-incoming-container">
            <div className="EBS-incoming-container1">
                <div className="EBS-incoming-header-container1">Student Enroll | Batch Enroll | Incoming Students </div>
                <div className="EBS-incoming-section">
                    <div className="EBS-incoming-selection-section">
                        <div className="EBS-incoming-selection-GL"><p>Grade Level</p>
                            <div className="EBS-incoming-GL-drop"></div>
                        </div>
                        <div className="EBS-incoming-selection-Sec"><p>Section</p>
                            <div className="EBS-incoming-Sec-drop"></div>
                        </div>
                    </div>
                    <div className="EBS-incoming-enter-bttn">
                        <button className="EBS-incoming-ENTER-button">Enter</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default EnrollBatchStudentIncomingBox