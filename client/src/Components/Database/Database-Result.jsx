import React, { useState } from "react";
import "./Database-Result.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import CircleIcon from '@mui/icons-material/Circle';


function DatabaseResult(props) {
    const { searchResult } = props;
    const [selectedStudent, setSelectedStudent]=useState(null);

    if (!Array.isArray(searchResult)) {
        return (
            <div className="container-md mb-3">
                <div className="container-md border p-3">
                    <div className="row justify-content-end">
                        <div className="col-4 align-self-end">
                            <div class="input-group mb-1">
                                <label class="input-group-text" for="inputGroupSelectAD1">Sort</label>
                                <select class="form-select" id="inputGroupSelectAD2">
                                    <option selected>Select</option>
                                    <option value="ADBasicInformation">Alphabetically</option>
                                    <option value="ADOverrideLogs">Recent Logs</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5 align-content-center">
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }

    function displayAdminBasicInfo(data){
        return <div className="row mb-5 m-3">
                    <div className="dbresult-header">
                        <p className="dbheader-name">Name</p>
                        <p className="dbheader-position">Position</p>
                        <p className="dbheader-logs">Overriding Logs</p>
                    </div>
                    <ul className="dbResult-list"> 
                        {data.map(item => (
                            <li key={item.id} 
                                className="dbItems"
                                id={(item.id)%2 === 0 ? 'dbItems-even' : ''}>
                                <div id='profileIcon'><AccountCircleIcon fontSize="large"/></div>
                                <div id="displayName">{item.overrider_name}</div>
                                <div id="displayEmail">{item.overrider_position}</div>
                                <div id="displayStatus">{item.overrider_total_logs}</div>
                            </li>
                        ))}
                    </ul>
                </div>
    }

    function displayAdminLogs(data){
        return <div className="row mb-5 m-3">
                    <div className="dbresult-header">
                        <p className="dbheader-name" style={{position: "relative", left: "10%"}}>Name</p>
                        <p className="dbheader-position" style={{position: "relative", left: "25%"}}>Position</p>
                        <p className="dbheader-logs" style={{position: "relative", left: "40%"}}>Student</p>
                        <p className="dbheader-reason" style={{position: "relative", left: "55%"}}>Reason</p>
                        <p className="dbheader-date" style={{position: "relative", left: "70%"}}>Date</p>
                    </div>
                    <ul className="dbResult-list"> 
                        {data.map(item => (
                            <li key={item.id} 
                                className="dbItems"
                                id={(item.id)%2 === 0 ? 'dbItems-even' : ''}>
                                {/* <div id='profileIcon'><AccountCircleIcon fontSize="large"/></div> */}
                                <div id="displayName" >{item.overrider_name}</div>
                                <div id="displayPosition">{item.position}</div>
                                <div id="displayStudent">{item.student_name}</div>
                                <div id="displayStudent">{item.overriding_reason}</div>
                                <div id="displayDate">{item.overriding_date}</div>
                            </li>
                        ))}
                    </ul>
                </div>
    }

    function displayStudentInfo(data) {
        const handleEditClick = (student) => {
          setSelectedStudent(student);
        };
        return <div className="row mb-6 m-3">
                <div className="dbresult-header">
                    <p className="dbheader-name">Name</p>
                    <p className="dbheader-grade-section">Grade&Section</p>
                    <p className="dbheader-status">Status</p>
                    <p className="dbheader-actions">Actions</p>
                </div>
                <ul className="dbResult-list"> 
                    {data.map(student => (
                        <li key={student.id} 
                            className="dbItems"
                            id={(student.id)%2 === 0 ? 'dbItems-even' : ''}>
                            <div id='profileIcon'><AccountCircleIcon fontSize="large"/></div>
                            <div id="displayName">{student.first_name} {student.middle_name} {student.last_name}</div>
                            <div id="displayEmail">{student.grade_level}-{student.section_name}</div>
                            <div id="displayStatus"><CircleIcon color="success"/></div>
                            {/* <div id="action-icon"><EditIcon/></div> */}
                            <button id="action-icon" data-bs-toggle= "modal" data-bs-target="#editDBModal" onClick={() => handleEditClick(student)} ><EditIcon/></button>
                        </li>
                    ))}
                </ul>
            </div> 
        

    }

    function displayStudentLogs(data){
        return <div className="row mb-7 m-3">
                    <div className="dbresult-header">
                        <p className="dbheader-name">Name</p>
                        <p className="dbheader-time-in">Time-in</p>
                        <p className="dbheader-time-out">Time-out</p>
                        <p className="dbheader-date">Date</p>
                    </div>
                    <ul className="dbResult-list"> 
                        {data.map(item => (
                            <li key={item.id} 
                                className="dbItems"
                                id={(item.id)%2 === 0 ? 'dbItems-even' : ''}>
                                <div id='profileIcon'><AccountCircleIcon fontSize="large"/></div>
                                <div id="displayName">{item.first_name} {item.last_name} </div>
                                <div id="displayTimeIn">{item.time_in}</div>
                                <div id="displayTimeOut">{item.time_out}</div>
                                <div id="displayDate">{(item.date)}</div>
                            </li>
                        ))}
                    </ul>
                </div>
    }

    function displayNoData(){
        return (
            <div className="row mb-7 m-3">
                <div className="row mb-5 align-content-center">
                    <p>No data available</p>
                </div>
            </div>
        )
    }
    

    return (
        <div className="container-md mb-3">
            <div className="container-md border p-3">
                <div className="row justify-content-end">
                    <div className="col-4 align-self-end">
                        <div class="input-group mb-1">
                            <label class="input-group-text" for="inputGroupSelectAD1">Sort</label>
                            <select class="form-select" id="inputGroupSelectAD2">
                                <option selected>Select</option>
                                <option value="ADBasicInformation">Alphabetically</option>
                                <option value="ADOverrideLogs">Recent Logs</option>
                            </select>
                        </div>
                    </div>
                </div>
                {
                    (searchResult[0]['values'] == null || searchResult[0]['values'].length <= 0) ? displayNoData() :
                    searchResult[0]['mode'] === 'student-basic-info' ? displayStudentInfo(searchResult[0]['values']) : 
                    searchResult[0]['mode'] === 'student-attendance-logs' ? displayStudentLogs(searchResult[0]['values']) :
                    searchResult[0]['mode'] === 'override-basic-info' ? displayAdminBasicInfo(searchResult[0]['values']) :
                    searchResult[0]['mode'] === 'override-logs' ? displayAdminLogs(searchResult[0]['values']) :
                    <p>No data available</p>
                }
            </div>
            <div class="modal fade" id="editDBModal" tabindex="-1" aria-labelledby="editDBModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header bg-success text-light">
                        <h1 class="modal-title fs-5" id="editDBModalLabel">Edit Information</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    {selectedStudent && (
                        <div>
                            <div className="row p-3 ms-3">
                                <div className="col border border-top-0 rounded me-4">
                                    <div className="row  rounded-top bg-success">
                                        <div className="col"> <p class="text-center text-light fs-5">Student Name</p> </div>   
                                    </div>
                                    <div className="row gap-0 p-1">
                                        <div class="input-group mb-1">
                                                <span class="input-group-text" id="selectedStudentFN">First Name:</span>
                                                <input type="text" class="form-control" 
                                                placeholder={selectedStudent.first_name}
                                                aria-label="StudentFN" aria-describedby="StudentFN"></input>
                                        </div>
                                        <div class="input-group mb-1">
                                                <span class="input-group-text" id="selectedStudentMN">Middle Name:</span>
                                                <input type="text" class="form-control" 
                                                placeholder={selectedStudent.middle_name}
                                                aria-label="StudentMN" aria-describedby="StudentMN"></input>
                                        </div>
                                        <div class="input-group mb-1">
                                                <span class="input-group-text" id="selectedStudentLN">Last Name:</span>
                                                <input type="text" class="form-control" 
                                                placeholder={selectedStudent.last_name}
                                                aria-label="StudentLN" aria-describedby="StudentLN"></input>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                            <div className="row p-3 ms-3">
                                <div className="col border border-top-0 rounded me-4">
                                    <div className="row  rounded-top bg-success">
                                        <div className="col"> <p class="text-center text-light fs-5">Grade & Section</p> </div>   
                                    </div>
                                    <div className="row gap-0 p-1">
                                        <div class="input-group input-group-large mb-1">
                                                <span class="input-group-text" id="selectedStudentStatus">Status:</span>
                                                <input type="text" class="form-control" 
                                                placeholder="#"
                                                aria-label="StudentStatus" aria-describedby="StudentStatus"></input>
                                        </div>
                                        <div class="input-group mb-1">
                                                <span class="input-group-text" id="selectedStudentGL">Grade Level:</span>
                                                <input type="text" class="form-control" 
                                                placeholder={selectedStudent.grade_level}
                                                aria-label="StudentGL" aria-describedby="StudentGL"></input>
                                        </div>
                                        <div class="input-group mb-1">
                                                <span class="input-group-text" id="selectedStudentSec">Section:</span>
                                                <input type="text" class="form-control" 
                                                placeholder={selectedStudent.section_name}
                                                aria-label="StudentSec" aria-describedby="StudentSec"></input>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>

                            <div className="row p-3 ms-3">
                                <div className="col border border-top-0 rounded me-4">
                                    <div className="row  rounded-top bg-success">
                                        <div className="col"> <p class="text-center text-light fs-5">Contact Information</p> </div>   
                                    </div>
                                    <div className="row gap-0 p-1">
                                        <div class="input-group mb-1">
                                                <span class="input-group-text" id="selectedStudentPN">Contact Name:</span>
                                                <input type="text" class="form-control" 
                                                placeholder=""
                                                aria-label="StudentPN" aria-describedby="StudentPN"></input>
                                        </div>
                                        <div class="input-group mb-1">
                                                <span class="input-group-text" id="selectedStudentRel">Relationship:</span>
                                                <input type="text" class="form-control" 
                                                placeholder= ""
                                                aria-label="StudentRel" aria-describedby="StudentRel"></input>
                                        </div>
                                        <div class="input-group mb-1">
                                                <span class="input-group-text" id="selectedStudentCN">Contact No.:</span>
                                                <input type="text" class="form-control" 
                                                placeholder=""
                                                aria-label="StudentCN" aria-describedby="StudentCN"></input>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>


                        </div>
                    )}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default DatabaseResult;