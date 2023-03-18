import "./Enroll-a-Student-Box.css";
import React, { useRef, useState } from 'react'
import UserIcon from '../../Assets/Vectors/User.png'
import UsersIcon from '../../Assets/Vectors/Users.png'

function EnrollaStudentBox(){
    return(
        <div className="enroll-a-student-section-container">  
        <div className="E-a-student-container1">
            <div className="E-a-student-container2"><p>Student Enroll | Individual Enroll</p></div>    
            <div className="E-a-student-form">
                <div className="E-a-student-container3">
                <button className="E-a-student-generate-ID-button">Generate ID Number</button>
                </div>
                <div className="E-a-student-container4"><p>STUDENT INFORMATION</p>
                    <div className="E-a-student-container5">
            </div>
            </div>

            <button className="E-a-student-enroll-button">Enroll</button></div>                





                {/* <div className="enroll-a-student-buttons">
                    <button className="enroll-a-student-button">Individual Enroll</button>
                    <button className="enroll-group-student-button">Batch Enroll</button></div>
                </div> */}
            </div>
        </div>
    
    )
}
export default EnrollaStudentBox