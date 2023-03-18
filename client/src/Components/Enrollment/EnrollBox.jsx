import "./EnrollBox.css";
import React, { useRef, useState } from 'react'
import UserIcon from '../../Assets/Vectors/User.png'
import UsersIcon from '../../Assets/Vectors/Users.png'

function EnrollBox(){

    // const nameForm = useRef(null);

    // const [isVisible, setIsVisible] = useState(false);
    // const toggleVisibility = () => {
    //   setIsVisible(!isVisible);
    // };


    return( 
        <div className="enroll-section-container">  
            <div className="E-container1">
                

            <div className="E-container2"><p>Enrollment Access</p></div>    
                <div className="enroll-buttons">
                    <button className="enroll-student-button">Student Enroll</button>
                    <button className="enroll-admin-button">Admin Enroll</button></div>
                </div>
        </div>
    
    )

}
export default EnrollBox