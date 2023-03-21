import "./Enroll-Batch-Student-NewYear-Box.css";
import React, {useState} from "react";

function EnrollBatchStudentNYBox(){
    const [cons1Grade,setCons1Grade]=useState();
    const [cons2Grade,setCons2Grade]=useState();
    const [cons1Section,setCons1Section]=useState();
    const [cons2Section,setCons2Section]=useState();
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
                                            <div className="EBS-NY-GL-drop">
                                            <select className="grade-options" value={cons1Grade} onChange={e=>setCons1Grade(e.target.value)}>
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
                                        <div className="EBS-NY-selection-Sec"><p>Section</p>
                                            <div className="EBS-NY-Sec-drop">
                                            <select className="section-options" value={cons1Section} onChange={e=>setCons1Section(e.target.value)}>
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
                                            <div className="EBS-NY-GL-drop2">
                                            <select className="grade-options" value={cons2Grade} onChange={e=>setCons2Grade(e.target.value)}>
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
                                        <div className="EBS-NY-selection-Sec2"><p>Section</p>
                                            <div className="EBS-NY-Sec-drop2">
                                            <select className="section-options" value={cons2Section} onChange={e=>setCons2Section(e.target.value)}>
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