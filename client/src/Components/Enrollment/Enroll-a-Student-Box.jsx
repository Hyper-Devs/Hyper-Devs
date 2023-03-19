import "./Enroll-a-Student-Box.css";
import React, { useRef, useState } from 'react'
// import UserIcon from '../../Assets/Vectors/User.png'
// import UsersIcon from '../../Assets/Vectors/Users.png'

function EnrollaStudentBox(){
    const [state, setState] = useState('')
    function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
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
                        {/* <div className="E-a-student-form"> */}
                            
                            
                            <div className="EAS-container1">
                                <div className="EAS-container-header1"><p>Personal Information</p></div>
                                <div className="EAS-Name">
                                    <div className="EAS-Name-container">
                                        <div className="EAS-Name-Name"><p>Name</p></div>
                                        <div className="EAS-Name-input">
                                                <input type= "text" name="{firstname}" className= "EAS-first-name" value={state}/>
                                                <input type= "text" name="{middlename}" className="EAS-middle-name" value={state}/>
                                                <input type= "text" name="{lastname}" className= "EAS-last-name" value={state}/>
                                        </div>                                   
                                    </div>
                                    
                                    <div className="EAS-Sex-BD">
                                        <div className="EAS-Sex">
                                            <div className="EAS-Sex-container">
                                                <div className="EAS-Sex-Sex"><p>Sex</p></div>
                                                {/* <div class="dropdown">
                                                    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
                                                    <div id="myDropdown" class="dropdown-content">
                                                        <a href="#">Link 1</a>
                                                        <a href="#">Link 2</a>
                                                        <a href="#">Link 3</a>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                            <div className="EAS-BD-container">
                                                <div className="EAS-BD-BD"><p>Birthdate</p></div>
                                                <div className="EAS-BD-input">
                                                    <input type= "text" name="{birthdate}" className= "EAS-BD-Birthdate" value={state}/>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="EAS-container2">
                                <div className="EAS-container-header2"><p>Parents Information</p></div>
                                <div className="EAS-P-content">
                                    <div className="EAS-P-Name">
                                    <div className="EAS-P-Name-container">
                                        <div className="EAS-P-Name-Name"><p>Name</p></div>
                                        <div className="EAS-P-Name-input">
                                                <input type= "text" name="{firstname}" className= "EAS-P-first-name" value={state}/>
                                                <input type= "text" name="{middlename}" className="EAS-P-middle-name" value={state}/>
                                                <input type= "text" name="{lastname}" className= "EAS-P-last-name" value={state}/>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="EAS-R-CN">
                                        <div className="EAS-Relationship-container">
                                            <div className="EAS-Relationship-Relationship">Relationship</div>
                                            <div className="EAS-Relationship-input">
                                                <input type= "text" name="{relationship}" className= "EAS-P-Relation" value={state}/>
                                            </div>
                                        </div>
                                        <div className="EAS-Contact-Number-container">
                                            <div className="EAS-Contact-Number-CN"><p>ContactNo.</p></div>
                                            <div className="EAS-Contact-Number-input">
                                                <input type= "text" name="{contactno.}" className= "EAS-CN" value={state}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="EAS-container3">
                                <div className="EAS-container-header3"><p>Class Information</p></div>
                                <div className="EAS-Grade-Section">
                                <div className="EAS-Grade-container">
                                            <div className="EAS-Grade-Grade"><p>Grade</p></div>
                                            <div className="EAS-Grade-input"></div>
                                    </div>
                                    <div className="EAS-Section-container">
                                            <div className="EAS-Section-Section"><p>Section</p></div>
                                            <div className="EAS-Section-input"></div>
                                    </div>
                                </div>


                                </div>
                            </div>
                            
                        {/* </div> */}
                    
                    
                    </div>
                </div>

                <button className="E-a-student-enroll-button">Enroll</button>
            </div>                





                {/* <div className="enroll-a-student-buttons">
                    <button className="enroll-a-student-button">Individual Enroll</button>
                    <button className="enroll-group-student-button">Batch Enroll</button></div>
                </div> */}
        </div>

    
    )
}
export default EnrollaStudentBox