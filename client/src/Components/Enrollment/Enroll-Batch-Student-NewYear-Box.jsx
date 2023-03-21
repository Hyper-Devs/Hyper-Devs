import "./Enroll-Batch-Student-NewYear-Box.css";
import React from "react";

function EnrollBatchStudentNYBox(){
    return(
        <div className="enroll-batch-student-NY-container">
            <div className="EBS-NY-container1">
                <div className="EBS-NY-header-container1">Student Enroll | Batch Enroll | New School Year </div>
                    <div className="EBS-NY-sec-cons1">
                        <div className="EBS-NY-section-container1"><p>Current Class</p>
                            <div className="EBS-NY-section-container2">
                                <div className="EBS-NY-section">
                                    <div className="EBS-NY-selection-section">
                                        <div className="EBS-NY-selection-GL"><p>Grade Level</p>
                                            <div className="EBS-NY-GL-drop"></div>
                                        </div>
                                        <div className="EBS-NY-selection-Sec"><p>Section</p>
                                            <div className="EBS-NY-Sec-drop"></div>
                                        </div>
                                    </div>
                                    <div className="EBS-NY-enter-bttn">
                                        <button className="EBS-NY-ENTER-button">Enter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="EBS-NY-sec-cons2">
                        <div className="EBS-NY-section-container2"><p>Class Update</p>
                            <div className="EBS-NY-section-container2-2">
                                <div className="EBS-NY-section2">
                                    <div className="EBS-NY-selection-section2">
                                        <div className="EBS-NY-selection-GL2"><p>Grade Level</p>
                                            <div className="EBS-NY-GL-drop2"></div>
                                        </div>
                                        <div className="EBS-NY-selection-Sec2"><p>Section</p>
                                            <div className="EBS-NY-Sec-drop2"></div>
                                        </div>
                                    </div>
                                    <div className="EBS-NY-enter-bttn2">
                                        <button className="EBS-NY-ENTER-button2">Enter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    )
}
export default EnrollBatchStudentNYBox