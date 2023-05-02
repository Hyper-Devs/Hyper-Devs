import "./Enroll-Ind-Results.css"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios';

function EnrollIndResult(){
    const [hasEnteredEnrollForm, setHasEnteredEnrollForm] = useState(false);
    const [availSections, setAvailSections] = useState({})
    const gradeLevels = Object.keys(availSections);
    const gradeLevelOptions = gradeLevels.map((gradelevel) => ({value: gradelevel, label: gradelevel}))
    const [sectionOptions, setSectionOptions] = useState([]);
    const [selectedSY, setSYFilter] = useState("Select");

    const [file, setFile] = useState(null)


    // functions for setting up the grade levels and sections options
    function enrollFormEnter () {
        if (hasEnteredEnrollForm == false) { fetchAvailRooms(); }
        setHasEnteredEnrollForm(true)
    };

    const fetchAvailRooms = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/enroll/available-rooms`);
            setAvailSections(response.data)
        } catch (err) {
            console.log(err);
        }
    };

    function updateSelectedSY(event){
        if (event.target.value != 'Select'){
            setSYFilter(event.target.value);
        }
    };

    function updateGLStudentFilter(){
        if (selectedSY != 'Select'){
            const sections = availSections[selectedSY];
            setSectionOptions(sections.map((section) => ({value: section, label: section})))
        }
    };


    // functions for handling the posting of the student information
    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        addStudent(formJson)
    };

    function handleFileInputChange(e) {
        setFile(e.target.files[0]);
    };

    function handleFileUpload(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('csv', file);

        addStudents(formData)
    };

    const addStudents = async (batchFile) => {
        try {
            const result = await axios.post(`http://localhost:8800/enroll/batch/new-student`, batchFile, {
                headers: {
                'Content-Type': 'multipart/form-data'
              }});
            console.log(result)
        } catch (error){
            console.log(error)
        }
    };

    const addStudent = async (studentInfo) => {
        try {
            const result = await axios.post(`http://localhost:8800/enroll/new-student`, studentInfo);
            console.log(result)
        } catch (error){
            console.log(error)
        }
    };


    return (
        <div className="container-fluid p-3" onMouseOver={enrollFormEnter}>
            <div className="row">
                <div className="col border border-success rounded bg-secondary bg-opacity-25 px-5 py-3"> 
                    <form onSubmit={handleSubmit}>
                        <div class="input-group mb-2">
                            <button class="btn btn-success" type="button" id="SIDnumber">Generate ID Number</button>
                            <input type="text" class="form-control" placeholder="or Enter an ID Number" aria-label="SIDnumber" aria-describedby="SIDnumber"></input>
                        </div>
                        <div className="row p-3 border border-success rounded mb-2">
                            <label for="SInfo" class="form-label text-center text-success">STUDENT'S INFORMATION</label>
                                <div class="input-group mb-1">
                                    <span class="input-group-text">Name</span>
                                    <input 
                                        name="student-first-name"
                                        type="text" 
                                        class="form-control" 
                                        placeholder="First Name" 
                                        aria-label="SFN" 
                                        aria-describedby="SFN" 
                                        required
                                    ></input>
                                    <input 
                                        name="student-middle-name"
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Middle Name" 
                                        aria-label="SMN" 
                                        aria-describedby="SFN"
                                    ></input>
                                    <input 
                                        name="student-last-name"
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Last Name" 
                                        aria-label="SLN" 
                                        aria-describedby="SFN" 
                                        required
                                    ></input>
                                </div>
                                <div className="row-flex">
                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for="inputGroupSelect01">Grade</label>
                                            <select 
                                                name="student-grade-level"
                                                class="form-select bg-success bg-opacity-25" 
                                                id="inputGroupSelect01"
                                                onClick={(e) => updateSelectedSY(e)}
                                            >
                                                <option selected>Select</option>
                                                {gradeLevelOptions.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                                            </select>
                                        <label class="input-group-text" for="inputGroupSelect01">Section</label>
                                            <select 
                                                name="student-section"
                                                class="form-select bg-success bg-opacity-25" 
                                                id="inputGroupSelect01"
                                                onClick={() => updateGLStudentFilter()}
                                            >
                                                <option selected>Select</option>
                                                {sectionOptions.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                                            </select>
                                    </div>
                                </div>                   
                        </div>
                        <div className="row mb-1 p-3 border border-success rounded">
                            <label for="SInfo" class="form-label text-center text-success">CONTACT INFORMATION</label>
                            <div class="input-group mb-1">
                                <span class="input-group-text">Name</span>
                                <input 
                                    name="guardian-first-name"
                                    type="text" 
                                    class="form-control" 
                                    placeholder="First Name" 
                                    aria-label="PFN" 
                                    aria-describedby="PFN" 
                                    required
                                ></input>
                                <input 
                                    name="guardian-middle-name"
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Middle Name" 
                                    aria-label="PMN" 
                                    aria-describedby="PFN" 
                                ></input>
                                <input 
                                    name="guardian-last-name"
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Last Name" 
                                    aria-label="PLN" 
                                    aria-describedby="PFN" 
                                    required
                                ></input>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Relationship</span>
                                <input 
                                    name="guardian-relationship"
                                    type="text"
                                     class="form-control" 
                                     placeholder="Relationship" 
                                     aria-label="PRelationship" 
                                     aria-describedby="PRelationship" 
                                     required
                                ></input>

                                <span class="input-group-text">Contact No.</span>
                                <span class="input-group-text bg-success bg-opacity-25">+63</span>
                                <input 
                                    name="guardian-contact-number"
                                    type="number" 
                                    class="form-control" 
                                    placeholder="9XXXXXXXXXX" 
                                    aria-label="PRelationship" 
                                    aria-describedby="PRelationship" 
                                    required
                                ></input>
                            </div>
                        </div>
                            <div className="row">
                                <button type="submit" class="btn btn-success">Enroll Student</button>
                            </div>
                    </form>
                    <div className="row">
                        <label for="SInfo" class="form-label text-center text-success">or </label>
                    </div>
                    <div className="row p-3 mb-2 border border-success rounded"> 
                        <label for="SInfo" class="form-label text-center text-success">UPLOAD STUDENT INFORMATION</label>
                        <form onSubmit={handleFileUpload}>
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                <input 
                                    onChange={handleFileInputChange} 
                                    type="file" 
                                    name="batch-enroll-file" 
                                    class="form-control bg-success bg-opacity-50" 
                                    id="inputGroupFile01" 
                                    accept="application/csv,text/csv">  
                                     
                                </input>
                                <button type="submit" class="btn btn-success">Enroll Student</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default EnrollIndResult