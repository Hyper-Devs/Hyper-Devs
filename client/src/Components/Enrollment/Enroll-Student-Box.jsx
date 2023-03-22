import "./Enroll-Student-Box.css";
import React, { useRef, useState } from 'react'
import UserIcon from '../../Assets/Vectors/User.png'
import UsersIcon from '../../Assets/Vectors/Users.png'

function EnrollStudentBox(props){

    const handleClick = (buttonId) => {
        props.onButtonClick(buttonId);
    }

    return(
        <div className="enroll-student-section-container">  
            <div className="E-student-container1">
                

            <div className="E-student-container2"><p>Student Enroll</p></div>    
                <div className="enroll-student-buttons">
                    <button className="enroll-a-student-button" onClick={() => handleClick('enStud-indi')}>Individual Enroll</button>
                    <button className="enroll-group-student-button" onClick={() => handleClick('enStud-batch')}>Batch Enroll</button></div>
                </div>
        </div>
    )

}
export default EnrollStudentBox