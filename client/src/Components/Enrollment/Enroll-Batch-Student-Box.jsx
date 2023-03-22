import "./Enroll-Batch-Student-Box.css";
import React, { useRef, useState } from 'react'
import UserIcon from '../../Assets/Vectors/User.png'
import UsersIcon from '../../Assets/Vectors/Users.png'

function EnrollBatchStudentBox(props){

    const handleClick = (buttonId) => {
        props.onButtonClick(buttonId);
    };

    return(
        <div className="enroll-batch-student-section-container">  
            <div className="E-batch-student-container1">
                

            <div className="E-batch-student-container2"><p>Student Enroll | Batch Enroll</p></div>    
                <div className="enroll-batch-student-buttons">
                    <button className="enroll-new-student-button" onClick={() => handleClick('enStud-batch-incoming')}>Incoming Students</button>
                    <button className="enroll-existing-student-button" onClick={() => handleClick('enStud-batch-new')}>New School Year</button></div>
                </div>
        </div>
    )

}
export default EnrollBatchStudentBox