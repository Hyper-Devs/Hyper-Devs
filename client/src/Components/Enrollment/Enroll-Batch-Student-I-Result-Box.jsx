import "./Enroll-Batch-Student-I-Result-Box.css";
import React from "react";

function EnrollBatchStudentIncomingResult(){
    return(
        <div className="enroll-batch-student-I-container-result">
            <div className="EBS-I-container1-result">
                <div className="EBS-I-header-container1-result">Student Enroll | Batch Enroll | Incoming Students | Enroll to Classes </div>
                    <div className="EBS-I-sec-cons1-result">
                        <div className="EBS-I-section-container1-result"><p>Current Class</p>
                            <div className="EBS-I-section-container2-result">
                                <div className="EBS-I-section-result">
                                    <div className="EBS-I-selection-section-result">
                                        <div className="EBS-I-selection-GL-result"><p>Grade Level</p>
                                            <div className="EBS-I-GL-drop-result"></div>
                                        </div>
                                        <div className="EBS-I-selection-Sec-result"><p>Section</p>
                                            <div className="EBS-I-Sec-drop-result"></div>
                                        </div>
                                    </div>
                                    <div className="EBS-I-enter-bttn-result">
                                        <button className="EBS-I-ENTER-button-result">New Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="EBS-I-sec-DL-result">
                        <div className="EBS-I-section-container-DL-section-result">
                        <div className="EBS-I-section-container-DL-header-result"><p>9-RED</p></div>
                            <div className="EBS-I-section">
                                <div className="EBS-I-instruct"><p>This excel file is system generated. Download and fill-out the file with new students information. Afterwards, re-upload the completed excel file below.</p></div>
                                <div className="EBS-I-bttn-div">
                                    <button className="EBS-I-DL-info">9-RED-SY2021-2022.xlxs</button>
                                </div>
                            </div>
                        </div>





                    <div className="EBS-I-sec-cons2-result">
                        <div className="EBS-I-section-container2-result"><p>Class Update</p>
                            <div className="EBS-I-section-container2-2-result">
                                <div className="EBS-I-section2-result">
                                    <div className="EBS-I-selection-section2-result">
                                        <div className="EBS-I-selection-GL2-result"><p>Grade Level</p>
                                            <div className="EBS-I-GL-drop2-result"></div>
                                        </div>
                                        <div className="EBS-I-selection-Sec2-result"><p>Section</p>
                                            <div className="EBS-I-Sec-drop2-result"></div>
                                        </div>
                                    </div>
                                    <div className="EBS-I-enter-bttn2-result">
                                        <button className="EBS-I-ENTER-button2-result">Upload Student List</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
}
export default EnrollBatchStudentIncomingResult