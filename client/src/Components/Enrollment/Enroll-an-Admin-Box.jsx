import "./Enroll-an-Admin-Box.css";
import React, { useRef, useState } from 'react'


function EnrollanAdminBox(){
    const [state, setState] = useState('')
    return(
        <div className="enroll-an-admin-section-container">
            <div className="E-an-admin-container1">
                <div className="E-an-admin-container2"><p>Admin Enroll | Individual Enroll</p></div>
                <div className="E-an-admin-form">
                    <div className="E-an-admin-container3">
                        <button className="E-an-admin-generate-ID-button">Generate ID Number</button>
                    </div>
                    <div className="E-an-admin-container4"><p>ADMIN INFORMATION</p>
                        <div className="E-an-admin-container5">
                            <div className="EAA-container1">
                                <div className="EAA-container1-header"><p>Personal Information</p></div>
                                <div className="EAA-PI">
                                    <div className="EAA-Name-container">
                                        <div className="EAA-Name-Name"><p>Name</p></div>
                                        <div className="EAA-Name-input">
                                                <input type= "text" name="{firstname}" className= "EAA-first-name" value={state}/>
                                                <input type= "text" name="{middlename}" className="EAA-middle-name" value={state}/>
                                                <input type= "text" name="{lastname}" className= "EAA-last-name" value={state}/>
                                        </div>
                                    </div>
                                    <div className="EAA-Sex-BD-container">
                                        <div className="EAA-Sex-container">
                                            <div className="EAA-Sex-Sex"><p>Sex</p></div>
                                            <div className="EAA-Sex-Input"></div>
                                        </div>
                                        <div className="EAA-BD-container">
                                            <div className="EAA-BD-BD"><p>Birthdate</p></div>
                                            <div className="EAA-BD-input">
                                            <input type= "text" name="{birthdate}" className= "EAA-BD-Birthdate" value={state}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="EAA-container2">
                                <div className="EAA-container2-header"><p>Contact Information</p></div>
                                <div className="EAA-CN">
                                    <div className="EAA-CN-container">
                                        <div className="EAA-CN-CN"><p>Contact Number</p></div>
                                        <div className="EAA-CN-input">
                                            <input type= "text" name="{contacno.}" className= "EAA-Contact-No" value={state}/>
                                        </div>
                                    </div>
                                </div>
         
                            </div>
                            <div className="EAA-container3">
                                <div className="EAA-container3-header"><p>Position</p></div>
                                <div className="EAA-P">
                                    <div className="EAA-P-container">
                                        <div className="EAA-P-P">Position</div>
                                        <div className="EAA-P-input">
                                    
                                        </div>
                                    </div>
                                    
                                    </div>    
                            </div>  




                        </div>
                    </div>
                </div>

                <button className="E-an-admin-enroll-button">Enroll</button>
            </div>
            
        </div>  
    )
}
export default EnrollanAdminBox