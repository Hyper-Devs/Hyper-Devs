import "./Enroll-Batch-Student-NewYear-Box.css";
import React, {useState} from "react";

function EnrollBatchStudentNYBox(props){
    const [cons1NYGrade,setCons1NYGrade]=useState();
    const [cons2NYGrade,setCons2NYGrade]=useState();
    const [cons1NYSection,setCons1NYSection]=useState();
    const [cons2NYSection,setCons2NYSection]=useState();

    const handleClick = (buttonId) => {
        props.onButtonClick(buttonId);
    };


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
                                            <select className="grade-options" value={cons1NYGrade} onChange={e=>setCons1NYGrade(e.target.value)}>
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
                                            <select className="section-options" value={cons1NYSection} onChange={e=>setCons1NYSection(e.target.value)}>
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
                                        <button className="EBS-NY-ENTER-button" onClick={() => handleClick('enStud-batch-new-result')}>Enter</button>
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
                                            <select className="grade-options" value={cons2NYGrade} onChange={e=>setCons2NYGrade(e.target.value)}>
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
                                            <select className="section-options" value={cons2NYSection} onChange={e=>setCons2NYSection(e.target.value)}>
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
                                        <button className="EBS-NY-ENTER-button2" onClick={() => handleClick('enStud-batch-new-result')} >Enter</button>
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