import React from 'react'
import './header.css';


function Header() {
    return (
        <div className='Header'>
            <p className='Header-text'>
                Gate Access Notification System
            </p>
            <p className='description'>
                Gate Access Notification System is a web-based system designed to track the entry and exit of students from a school premises. With this system, school administrators can monitor the movement of students in and out of the school, ensuring their safety and security. It has the following features: 
                <span className='feature'>Enroll</span>, 
                <span className='feature'>Logs</span>, 
                <span className='feature'>Notifies</span>, 
                <span className='feature'>Alerts</span>, 
                <span className='feature'>Overrides</span>.
            </p>
        </div>
    )
}

export default Header