import "./Enroll-Batch-Student-Incoming-Box.css";
import React, {useState} from "react";

function EnrollBatchStudentIncomingBox(){
    const [iGrade,setIGrade]=useState();
    const [iSection,setISection]=useState();

    return(
        <div className="enroll-batch-student-incoming-container">
            <div className="EBS-incoming-container1">
                <div className="EBS-incoming-header-container1">Student Enroll | Batch Enroll | Incoming Students </div>
                <div className="EBS-incoming-section">
                    <div className="EBS-incoming-selection-section">
                        <div className="EBS-incoming-selection-GL"><p>Grade Level</p>
                            <div className="EBS-incoming-GL-drop">
                            <select className="grade-options" value={iGrade} onChange={e=>setIGrade(e.target.value)}>
                                <option></option>
                                <option>Grade 7</option>
                                <option>Grade 8</option>
                                <option>Grade 9</option>
                                <option>Grade 10</option>
                                <option>Grade 11</option>
                                <option>Grade 12</option>
                            </select>
                            </div>
                        </div>
                        <div className="EBS-incoming-selection-Sec"><p>Section</p>
                            <div className="EBS-incoming-Sec-drop">
                            <select className="section-options" value={iSection} onChange={e=>setISection(e.target.value)}>
                                <option></option>
                                <option>Section 1</option>
                                <option>Section 2</option>
                                <option>Section 3</option>
                                <option>Section 4</option>
                                <option>Section 5</option>
                                <option>Section 6</option>
                            </select>
                            </div>
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