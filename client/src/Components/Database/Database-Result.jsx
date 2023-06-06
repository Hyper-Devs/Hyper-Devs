import axios from 'axios';
import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import CircleIcon from '@mui/icons-material/Circle';
import GlobalModal from '../Modal/globalmodal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Database-Result.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



function DatabaseResult(props) {
    const { searchResult } = props;
    const [selectedStudent, setSelectedStudent]=useState(null);
    const [editFieldKeys, setEditFieldKeys] = useState([]);

    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');
    const [showModal, setShowModal] = useState(false);

    const [showEditModal, setShowEditModal] = useState(false);

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
          setShowEditModal(true)
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

    function handleEditStudent (event){
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        formJson["student-id"] = selectedStudent['id']
        
        var fieldKeys = []
        for (var key in formJson){ fieldKeys.push(key) }
        setEditFieldKeys(fieldKeys)

        setShowEditModal(true)
        updateStudent(formJson)
    }

    const updateStudent = async (newStudent) => {
        try {
            const response = await axios.put(`http://localhost:8800/database/students/edit-student`, newStudent);

            if (response.status == 210){
                setTitleModal("Request processed successfully");
                setBodyModal('Student edit processed successfully. Reload the page to see the changes')
                setShowModal(true)
            } else {
                setTitleModal("Request processed successfully");
                setBodyModal("Something occurred. Refresh page")
                setShowModal(true)
            }
        } catch (error) {
            setTitleModal("Request processed unsuccessfully");
            setBodyModal(error)
            setShowModal(true)
        }
    }
    
    function revertInputFields(){
        for (var key in editFieldKeys){
            document.forms['student-edit-form'][key].value = '';
        }
    }

    const handleCloseModal = () => {

        // var i = 0, student = null;
        // while (i < searchResult[0]['values'].length){
        //     student = searchResult[0]['values'][i];
        //     if(student['id'] == selectedStudent['id']){
        //         setSelectedStudent(student)
        //         break
        //     }
        //     i += 1
        // }

        revertInputFields()
        setShowModal(false);
        setSelectedStudent(null)
        setShowEditModal(false);
    };


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
                    <form name="student-edit-form" onSubmit={handleEditStudent}>
                        {selectedStudent && showEditModal && (
                            <div class="modal-content">
                                <div class="modal-header bg-success text-light">
                                    <h1 class="modal-title fs-5" id="editDBModalLabel">Edit Information</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        <div className="row p-3 ms-3">
                                            <div className="col border border-top-0 rounded me-4">
                                                <div className="row  rounded-top bg-success">
                                                    <div className="col"> <p class="text-center text-light fs-5">Student Name</p> </div>   
                                                </div>
                                                <div className="row gap-0 p-1">
                                                    <div class="input-group mb-1">
                                                        <span class="input-group-text" id="selectedStudentFN">First Name:</span>
                                                        <input 
                                                            name='first_name'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue={selectedStudent.first_name}
                                                            aria-label="StudentFN" 
                                                            aria-describedby="StudentFN"
                                                        >
                                                        </input>
                                                    </div>
                                                    <div class="input-group mb-1">
                                                        <span class="input-group-text" id="selectedStudentMN">Middle Name:</span>
                                                        <input 
                                                            name='middle_name'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue={selectedStudent.middle_name}
                                                            aria-label="StudentMN" 
                                                            aria-describedby="StudentMN"
                                                        >
                                                        </input>
                                                    </div>
                                                    <div class="input-group mb-1">
                                                        <span class="input-group-text" id="selectedStudentLN">Last Name:</span>
                                                        <input 
                                                            name='last_name'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue={selectedStudent.last_name}
                                                            aria-label="StudentLN" 
                                                            aria-describedby="StudentLN"
                                                        >
                                                        </input>
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
                                                        <input 
                                                            name='status'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue="#"
                                                            aria-label="StudentStatus" aria-describedby="StudentStatus"
                                                        >
                                                        </input>
                                                    </div>
                                                    <div class="input-group mb-1">
                                                        <span class="input-group-text" id="selectedStudentGL">Grade Level:</span>
                                                        <input 
                                                            name='grade_level'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue={selectedStudent.grade_level}
                                                            aria-label="StudentGL" 
                                                            aria-describedby="StudentGL"
                                                        >
                                                        </input>
                                                    </div>
                                                    <div class="input-group mb-1">
                                                        <span class="input-group-text" id="selectedStudentSec">Section:</span>
                                                        <input 
                                                            name='section_name'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue={selectedStudent.section_name}
                                                            aria-label="StudentSec" 
                                                            aria-describedby="StudentSec"
                                                        >
                                                        </input>
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
                                                        <span class="input-group-text" id="selectedStudentPFN">Contact Name (First Name):</span>
                                                        <input 
                                                            name='parent_fn'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue={selectedStudent.parent_fn}
                                                            aria-label="StudentPFN" 
                                                            aria-describedby="StudentPFN"
                                                        >
                                                        </input>
                                                    </div>
                                                    <div class="input-group mb-1">
                                                        <span class="input-group-text" id="selectedStudentPLN">Contact Name (Last Name):</span>
                                                        <input 
                                                            name='parent_ln'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue={selectedStudent.parent_ln}
                                                            aria-label="StudentPLN" 
                                                            aria-describedby="StudentPLN"
                                                        >
                                                        </input>
                                                    </div>
                                                    <div class="input-group mb-1">
                                                        <span class="input-group-text" id="selectedStudentRel">Relationship:</span>
                                                        <input 
                                                            name='relationship'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue= {selectedStudent.relationship} 
                                                            aria-label="StudentRel" 
                                                            aria-describedby="StudentRel"
                                                        >
                                                        </input>
                                                    </div>
                                                    <div class="input-group mb-1">
                                                        <span class="input-group-text" id="selectedStudentCN">Contact No.:</span>
                                                        <input 
                                                            name='contact-num'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue={selectedStudent.contact_num}
                                                            aria-label="StudentCN" 
                                                            aria-describedby="StudentCN"
                                                        >
                                                        </input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" onClick={handleCloseModal} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-success">Save changes</button>
                                </div>
                                {showModal && (
                                    <GlobalModal
                                    showModal={showModal}
                                    title={titleModal}
                                    body={bodyModal}
                                    onClose={handleCloseModal}
                                    />
                                )}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )

}


export default DatabaseResult;