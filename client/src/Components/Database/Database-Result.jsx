import axios from 'axios';
import React, { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import CircleIcon from '@mui/icons-material/Circle';
import GlobalModal from '../Modal/globalmodal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Database-Result.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import api from "../../api/api"



function DatabaseResult(props) {
    const { searchResult } = props;
    const [selectedStudent, setSelectedStudent]=useState(null);
    const [editFieldKeys, setEditFieldKeys] = useState([]);

    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');
    const [showModalPrompt, setShowModalPrompt] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const [selectedSY, setSYFilter] = useState("2023-2024");            //use an api here in calling the latest school year
    const [selectedGL, setGLFilter] = useState("Select");
    //const [selectedSection, setSectionFilter] = useState("Select");

    const [studentFilter, setStudentFilter] = useState("None");
    const [gradeLevelFilter, setGradeLevelFilter] = useState([]);
    const [sectionFilter, setSectionFilter] = useState([]);


    function displayAdminBasicInfo(data) {
        return (
          <div className="row mb-5 m-3">
            <div className="table-responsive">
              <table className="table border border-success rounded text-center">
                <thead className='table-header'>
                  <tr>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>#</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Name</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Position</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Overriding Logs</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} >
                    <td><AccountCircleIcon fontSize="large" /></td>
                      <td>{item.overrider_name}</td>
                      <td>{item.overrider_position}</td>
                      <td>{item.overrider_total_logs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }
      

    function displayAdminLogs(data) {
        return (
          <div className="row mb-5 m-3">
            <div className="table-responsive">
              <table className="table border border-success rounded table-hover text-center">
                <thead className='table-header' >
                  <tr>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Name</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Position</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Student #</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Reason</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.overrider_name}</td>
                      <td>{item.role}</td>
                      <td>{item.student_id}</td>
                      <td>{item.overriding_reason}</td>
                      <td>{item.overriding_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }
      
      

      function displayStudentInfo(data) {
        const handleEditClick = (student) => {
          setSelectedStudent(student);
          setShowEditModal(true);
        };
      
        return (
          <div className="row mb-6 m-3">
            <div className="table-responsive">
              <table className="table border border-success rounded text-center">
                <thead className='table-header'>
                  <tr>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>#</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Name</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Grade&Section</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Status</th>
                    <th style={{ backgroundColor: "#00573F", color: "white" }}>Actions</th>
                  </tr>
                </thead >
                <tbody>
                  {data.map((student) => (
                    <tr
                      key={student.id}
                    >
                      <td>
                        <AccountCircleIcon fontSize="large" />
                        
                      </td>
                      <td>{student.first_name}{" "}
                        {student.middle_name && (
                          <span className="displayMiddleName">
                            {student.middle_name}
                          </span>
                        )}{" "}
                        {student.last_name}</td>
                      <td>
                        {student.grade_level}-{student.section_name}
                      </td>
                      <td>
                        <CircleIcon
                          color={student.status === "1" ? "success" : "fail"}
                        />
                      </td>
                      <td>
                        <button
                          id="action-iconStudent"
                          data-bs-toggle="modal"
                          data-bs-target="#editDBModal"
                          onClick={() => handleEditClick(student)}
                        >
                          <EditIcon />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }
      
      function displayStudentLogs(data) {
        return (
          <div className="row mb-7 m-3">
            <div className="table-responsive">
              <table className="table border border-success rounded">
                <thead className='table-header'>
                  <tr>
                <th style={{ backgroundColor: "#00573F", color: "white" }}>#</th>
                <th style={{ backgroundColor: "#00573F", color: "white" }}>Name</th>
                <th style={{ backgroundColor: "#00573F", color: "white" }}>Time-in</th>
                <th style={{ backgroundColor: "#00573F", color: "white" }}>Time-out</th>
                <th style={{ backgroundColor: "#00573F", color: "white" }}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className={item.id % 2 === 0 ? "dbItems-even" : ""}>
                      <td>
                        <AccountCircleIcon fontSize="large" />
                        
                      </td>
                      <td>{item.first_name} {item.last_name}</td>
                      <td>{item.time_in}</td>
                      <td >{item.time_out}</td>
                      <td >{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      }
      

    function displayNoData(){
        return (
            <div className="row mb-7 m-3 s">
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

        const isEditValueValid = [
            formJson["first_name"] !== '',
            formJson["last_name"] !== '',
            formJson["grade_level"] !== 'Select',
            formJson["section_name"] !== 'Select',
            formJson["parent_fn"] !== '',
            formJson["parent_ln"] !== '',
            formJson["contact-num"] !== '',
            formJson["relationship"] !== '',
        ];


        if (isEditValueValid.every(element=>element===true)){
            var fieldKeys = []
            for (var key in formJson){ fieldKeys.push(key) }
            setEditFieldKeys(fieldKeys)
    
            setShowEditModal(true)
            updateStudent(formJson)
        }
        else {
            setTitleModal("Request processed successfully");
            setBodyModal("Input error. Try again")
            setShowModalPrompt(true)
        }
    }

    const updateStudent = async (newStudent) => {
        try {
            const response = await api.put(`/database/students/edit-student`, newStudent);

            if (response.status === 210){
                setTitleModal("Request processed successfully");
                setBodyModal('Student edit processed successfully. Reload the page to see the changes')
                setShowModalPrompt(true)
            } else {
                setTitleModal("Request processed successfully");
                setBodyModal("Something occurred. Refresh page")
                setShowModalPrompt(true)
            }
        } catch (error) {
            setTitleModal("Request processed unsuccessfully");
            setBodyModal(error)
            setShowModalPrompt(true)
        }
    }
    
    function revertInputFields(){
        for (var key in editFieldKeys){
            document.forms['student-edit-form'][key].value = '';
        }
    }
    const handleCloseModalPrompt = () => { setShowModalPrompt(false); };

    const handleCloseModal = () => {
        revertInputFields()
        setSelectedStudent(null)
        setShowEditModal(false);
    };


    // functions for setting up the search filters in the database page
    const fetchStudentFilter = async () => {
        try {
            const response = await api.get(`/database/student-filter`);
            setStudentFilter(response.data);
        } catch (err) {
            setTitleModal("Refresh page!");
            setBodyModal("An error occurred")
            setShowModal(true)
        }
    }

    function updateSelectedGL(event){
        if (event.target.value !== 'Select'){
            setGLFilter(event.target.value);
            document.forms['student-edit-form']['section_name'].value = 'Select';
        }
    }

    function updateSelectedSection(event){
        if (event.target.value !== 'Select')
            setSectionFilter(event.target.value);
    }

    function updateGLStudentFilter(){
        //updates the grade level options
        if (selectedSY !== 'Select'){
            const gradeLevels = Object.keys(studentFilter[selectedSY]);
            setGradeLevelFilter(gradeLevels.map((grade_level) => ({value: grade_level, label: grade_level})))
        }
    }

    function updateSectionStudentFilter(){
        //updates the sections options
        if (selectedGL !== 'Select'){
            const sections = studentFilter[selectedSY][selectedGL];
            setSectionFilter(sections.map((section) => ({value: section, label: section})))
        }
    }




    useEffect(() => { fetchStudentFilter(); }, []);
    
    if (!Array.isArray(searchResult)) {
        return (
            <div className="container-md mb-3">
                <div className="container-md border border-success rounded p-3">
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

    return (
        <div className="container-md mb-3">
            <div className="container-md border border-success rounded p-3">
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
                    searchResult[0]['mode'] === 'user-basic-info' ? displayAdminBasicInfo(searchResult[0]['values']) :
                    searchResult[0]['mode'] === 'user-override-logs' ? displayAdminLogs(searchResult[0]['values']) :
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
                                                            required
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
                                                            required
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
                                                    <div class="input-group mb-1">
                                                        <label class="input-group-text " for="inputGroupSelectS1">Status</label>
                                                        <select 
                                                            name="status"
                                                            class="form-select" 
                                                            id="inputGroupSelectS1" 
                                                        >
                                                            <option selected value={selectedStudent.status}>{selectedStudent.status == '1' ? "Active" : "Inactive"}</option>
                                                            <option value={!selectedStudent.status}>{!selectedStudent.status == '0' ? "Inactive" : "Active"}</option>
                                                        </select>
                                                    </div>
                                                    <div class="input-group mb-1">
                                                        <label class="input-group-text " for="inputGroupSelectS2">Grade Level</label>
                                                        <select 
                                                            name="grade_level"
                                                            class="form-select" 
                                                            id="inputGroupSelectS2" 
                                                            onClick={() => updateGLStudentFilter()}
                                                            onChange={(e) => updateSelectedGL(e)}
                                                        >
                                                            <option selected >Select</option>
                                                            {gradeLevelFilter.map(({ value, label }) => <option value={value} >{label}</option>)}
                                                        </select>
                                                    </div>
                                                    <div class="input-group mb-1">
                                                        <label class="input-group-text" for="inputGroupSelectS3">Section</label>
                                                        <select 
                                                            name="section_name"
                                                            class="form-select" 
                                                            id="inputGroupSelectS3"
                                                            onClick={() => updateSectionStudentFilter()}
                                                            // onChange={(e) => updateSelectedSection(e)}
                                                        >
                                                            <option selected >Select</option>
                                                            {sectionFilter.map(({ value, label }) => <option value={value} >{label}</option>)}
                                                        </select>
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
                                                            required
                                                        ></input>
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
                                                            required
                                                        ></input>
                                                    </div>
                                                    {/* <div class="input-group mb-1">
                                                        <span class="input-group-text" id="selectedStudentRel">Relationship:</span>
                                                        <input 
                                                            name='relationship'
                                                            type="text" 
                                                            class="form-control" 
                                                            defaultValue= {selectedStudent.parent_relationship} 
                                                            aria-label="StudentRel" 
                                                            aria-describedby="StudentRel"
                                                            required
                                                        ></input>
                                                    </div> */}
                                                    <div class="input-group mb-1">
                                                        <span class="input-group-text" id="selectedStudentCN">Contact No.:</span>
                                                        <input 
                                                            name='contact_number'
                                                            type="number" 
                                                            class="form-control" 
                                                            defaultValue={selectedStudent.contact_num}
                                                            aria-label="StudentCN" 
                                                            aria-describedby="StudentCN"
                                                            required
                                                        ></input>
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
                                {showModalPrompt && (
                                    <GlobalModal
                                    showModal={showModalPrompt}
                                    title={titleModal}
                                    body={bodyModal}
                                    onClose={handleCloseModalPrompt}
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
