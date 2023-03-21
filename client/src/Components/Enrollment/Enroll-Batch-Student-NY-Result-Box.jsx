import "./Enroll-Batch-Student-NY-Result-Box.css";
import React, {useState} from "react";

function EnrollBatchStudentNewYearResult(){
    const [cons1NYResultGrade,setCons1NYResultGrade]=useState();
    const [cons2NYResultGrade,setCons2NYResultGrade]=useState();
    const [cons1NYResultSection,setCons1NYResultSection]=useState();
    const [cons2NYResultSection,setCons2NYResultSection]=useState();
    return(
        <div className="enroll-batch-student-NY-container-result">
            <div className="EBS-NY-container1-result">
                <div className="EBS-NY-header-container1-result">Student Enroll | Batch Enroll | New School Year | Enroll to Classes </div>
                    <div className="EBS-NY-sec-cons1-result">
                        <div className="EBS-NY-section-container1-result"><p>Current Class</p>
                            <div className="EBS-NY-section-container2-result">
                                <div className="EBS-NY-section-result">
                                    <div className="EBS-NY-selection-section-result">
                                        <div className="EBS-NY-selection-GL-result"><p>Grade Level</p>
                                            <div className="EBS-NY-GL-drop-result">
                                            <select className="grade-options" value={cons1NYResultGrade} onChange={e=>setCons1NYResultGrade(e.target.value)}>
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
                                        <div className="EBS-NY-selection-Sec-result"><p>Section</p>
                                            <div className="EBS-NY-Sec-drop-result">
                                            <select className="section-options" value={cons1NYResultSection} onChange={e=>setCons1NYResultSection(e.target.value)}>
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
                                    <div className="EBS-NY-enter-bttn-result">
                                        <button className="EBS-NY-ENTER-button-result">New Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="EBS-NY-sec-DL-result">
                        <div className="EBS-NY-section-container-DL-section-result">
                        <div className="EBS-NY-section-container-DL-header-result"><p>7-Yellow</p></div>
                            <div className="EBS-NY-section">
                                <div className="EBS-NY-instruct"><p>This excel file is system generated. Download and fill-out the file with new students information. Afterwards, re-upload the completed excel file below.</p></div>
                                <div className="EBS-NY-bttn-div">
                                    <button className="EBS-NY-DL-info">7-Yellow-SY2021-2022.xlxs</button>
                                </div>
                            </div>
                        </div>





                    <div className="EBS-NY-sec-cons2-result">
                        <div className="EBS-NY-section-container2-result"><p>Class Update</p>
                            <div className="EBS-NY-section-container2-2-result">
                                <div className="EBS-NY-section2-result">
                                    <div className="EBS-NY-selection-section2-result">
                                        <div className="EBS-NY-selection-GL2-result"><p>Grade Level</p>
                                            <div className="EBS-NY-GL-drop2-result">
                                            <select className="grade-options" value={cons2NYResultGrade} onChange={e=>setCons2NYResultGrade(e.target.value)}>
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
                                        <div className="EBS-NY-selection-Sec2-result"><p>Section</p>
                                            <div className="EBS-NY-Sec-drop2-result">
                                            <select className="section-options" value={cons2NYResultSection} onChange={e=>setCons2NYResultSection(e.target.value)}>
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
                                    <div className="EBS-NY-enter-bttn2-result">
                                        <button className="EBS-NY-ENTER-button2-result">Upload Student List</button>
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
export default EnrollBatchStudentNewYearResult