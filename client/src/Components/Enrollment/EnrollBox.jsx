import "./EnrollBox.css";
import React, { useRef, useState } from 'react'
import UserIcon from '../../Assets/Vectors/User.png'
import UsersIcon from '../../Assets/Vectors/Users.png'

function EnrollBox(props) {
    const handleClick = (buttonId) => {
        props.onButtonClick(buttonId);
    };

    return (
        <div className="enroll-section-container">
            <div className="E-container1">


                <div className="E-container2"><p>Enrollment Access</p></div>
                <div className="enroll-buttons">
                    <button className="enroll-student-button" onClick={() => handleClick('enStud')}>Student Enroll</button>
                    <button className="enroll-admin-button" onClick={() => handleClick('enAdm')}>Admin Enroll</button>
                    {/* <button className="enroll-student-button" onClick={event => props.onC                                                   lick(event.target.value)}>Student Enroll</button>
                     <button className="enroll-admin-button" onClick={event => props.onClick(event.target.value)}>Admin Enroll</button> */}
                </div>
            </div>
        </div>
    )
}

export default EnrollBox