import "./Database-Modifier.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';

/*
Backend Note

implement a mechanism where the data can be retrieved from the local storage
(instead of retrieving it directly from the database everytime the school year option is switched
 which can take time)
for the select option (i.e., grade level, section, school year)
*/

function DatabaseModifier(){
    const [accessType, setAccessType] = useState('Basic Information');
    const [hasEnteredSearch, setHasEnteredSearch] = useState(false);

    const [studentFilter, setStudentFilter] = useState("None");
    const school_years = Object.keys(studentFilter);
    const st_school_years = school_years.map((school_year) => ({value: school_year, label: school_year}))
    const [st_grade_level, setSt_grade_level] = useState([]);
    const [st_sections, setSt_sections] = useState([]);

    const [selectedSY, setSYFilter] = useState("Select");
    const [selectedGL, setGLFilter] = useState("Select");
    const [selectedSection, setSectionFilter] = useState("Select");


    // functions for setting up the search filters in the database page
    function searchFieldEnter () {
        if (hasEnteredSearch == false) { fetchStudentFilter(); }
        setHasEnteredSearch(true)
    }

    const fetchStudentFilter = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/database/student-filter`);
            setStudentFilter(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    function updateSelectedSY(event){
        if (event.target.value != 'Select'){
            setSYFilter(event.target.value);
        }
    }

    function updateSelectedGL(event){
        if (event.target.value != 'Select')
            setGLFilter(event.target.value);
    }

    function updateSelectedSection(event){
        if (event.target.value != 'Select')
            setSectionFilter(event.target.value);
    }

    function updateGLStudentFilter(){
        //updates the grade level options
        if (selectedSY != 'Select'){
            const grade_levels = Object.keys(studentFilter[selectedSY]);
            setSt_grade_level(grade_levels.map((grade_level) => ({value: grade_level, label: grade_level})))
        }
    }

    function updateSectionStudentFilter(){
        //updates the sections options
        if (selectedGL != 'Select'){
            const sections = studentFilter[selectedSY][selectedGL];
            setSt_sections(sections.map((section) => ({value: section, label: section})))
        }
    }

    const handleChange = (event) => {setAccessType(event.target.value);};


    // functions for fetching the student from the database
    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });
        // You can generate a URL out of it, as the browser does by default:
        // console.log(new URLSearchParams(formData).toString());
        // You can work with it as a plain object.
        const formJson = Object.fromEntries(formData.entries());
        fetchStudent(formJson['student-prim-info'], formJson['student-school-year'], formJson['student-grade-level'], formJson['student-section']);
    }

    const fetchStudent = async (student_prim_info, school_year, grade_level, section) => {
        try {
            const result = await axios.get(`http://localhost:8800/database/student-filter/student/${student_prim_info}/${school_year}/${grade_level}/${section}`);
            console.log(result)
        } catch (error){
            console.log(error)
        }
    };


    return(
        <div className="container-md p-3 ">
            <nav>
                <div class="nav nav-tabs border border-success-subtle" id="nav-tab" role="tablist">
                    <button class="nav-link active text-black" id="nav-student-tab" data-bs-toggle="tab" data-bs-target="#nav-student" type="button" role="tab" aria-controls="nav-student" aria-selected="true">Student Information</button>
                    <button class="nav-link text-black" id="nav-admin-tab" data-bs-toggle="tab" data-bs-target="#nav-admin" type="button" role="tab" aria-controls="nav-admin" aria-selected="false">Admin Information</button>
                </div>
            </nav>
            <div class="tab-content " id="nav-tabContent" onMouseOver={searchFieldEnter}>
                <div class="tab-pane fade show active" id="nav-student" role="tabpanel" aria-labelledby="nav-student-tab">
                    <div className="container-md ">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div class="input-group mb-1">
                                    <span class="input-group-text  " id="basic-addonS1">#</span>
                                    <input 
                                        name='student-prim-info'
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Enter Name or Number or Class" 
                                        aria-label="StudentInfo" aria-describedby="basic-addonS2" 
                                    >
                                    </input>

                                </div>
                                <div className="col">
                                    <div class="input-group mb-1">
                                        <label class="input-group-text" for="inputGroupSelectS5">School Year</label>
                                        <select 
                                            name="student-school-year"
                                            class="form-select" 
                                            id="inputGroupSelectS6"
                                            onClick={(e) => updateSelectedSY(e)}
                                        >
                                            <option selected>Select</option>
                                            {st_school_years.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="input-group mb-1">
                                        <label class="input-group-text " for="inputGroupSelectS1">Grade Level</label>
                                            <select 
                                                name="student-grade-level"
                                                class="form-select" 
                                                id="inputGroupSelectS2" 
                                                onClick={() => updateGLStudentFilter()}
                                                onChange={(e) => updateSelectedGL(e)}
                                            >
                                                <option selected>Select</option>
                                                {st_grade_level.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                                            </select>
                                    </div>
                                </div>
                                <div className="col">
                                    
                                    <div class="input-group mb-1">
                                        <label class="input-group-text" for="inputGroupSelectS3">Section</label>
                                        <select 
                                            name="student-section"
                                            class="form-select" 
                                            id="inputGroupSelectS4"
                                            onClick={() => updateSectionStudentFilter()}
                                            onChange={(e) => updateSelectedSection(e)}
                                        >


                                            <option selected>Select</option>
                                            {st_sections.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                
                            </div>  
                            <div className="row ">
                                <div className="col-4">
                                    <div class="input-group mb-1">
                                        <label class="input-group-text" for="inputGroupSelectS7">Access Type</label>
                                        <select 
                                            name="access-type"
                                            class="form-select" 
                                            id="inputGroupSelectS8"
                                            value={accessType}
                                            onChange={handleChange}
                                        >
                                            {/* <option selected>Basic Information</option> */}
                                            <option value="BasicInformation">Basic Information</option>
                                            <option value="Logs/Attendance">Logs/Attendace</option>
                                        </select>
                                    </div>
                                </div>
                                {accessType === "Logs/Attendance" && 
                                    <div className="col">
                                        <div class="input-group mb-1">
                                            <span class="input-group-text" id="from">Period Covered</span>
                                            <span class="input-group-text" id="from">from</span>
                                            <input 
                                                name="period-covered-from-month" 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="mm" 
                                                aria-label="mm" 
                                                aria-describedby="from"
                                            ></input>
                                            <input 
                                                name="period-covered-from-day"
                                                type="text" 
                                                class="form-control" 
                                                placeholder="dd" 
                                                aria-label="dd" 
                                                aria-describedby="from"
                                            ></input>
                                            <input 
                                                name="period-covered-from-year"
                                                type="text" 
                                                class="form-control" 
                                                placeholder="yyyy" 
                                                aria-label="yyyy" 
                                                aria-describedby="from"
                                            ></input>

                                            <span class="input-group-text" id="to">to</span>
                                            <input 
                                                name="period-covered-to-month" 
                                                type="text" 
                                                class="form-control" 
                                                placeholder="mm" 
                                                aria-label="mm" 
                                                aria-describedby="to"
                                            ></input>
                                            <input 
                                                name="period-covered-to-day"
                                                type="text" 
                                                class="form-control" 
                                                placeholder="dd" 
                                                aria-label="dd" 
                                                aria-describedby="to"
                                            ></input>
                                            <input 
                                                name="period-covered-to-year"
                                                type="text" 
                                                class="form-control" 
                                                placeholder="yyyy" 
                                                aria-label="yyyy" 
                                                aria-describedby="to"
                                            ></input>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="row p-2">
                                <button type="submit" class="btn btn-success">Search Database</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-admin" role="tabpanel" aria-labelledby="nav-admin-tab">
                    <div className="container-md ">
                                <div className="row">
                                    <div class="input-group mb-1">
                                            <span class="input-group-text" id="basic-addon1">#</span>
                                            <input type="text" class="form-control" placeholder="Enter Name or Position" aria-label="StudentInfo" aria-describedby="basic-addonS3"></input>
                                        </div>
                                        <div className="col">
                                            <div class="input-group mb-1">
                                                <label class="input-group-text" for="inputGroupSelectS9">Position</label>
                                                    <select class="form-select" id="inputGroupSelectS10">
                                                        <option selected>Select</option>
                                                        <option value="AdminOp">Admin</option>
                                                        <option value="FacultyOp">Faculty</option>
                                                    </select>
                                            </div>
                                        </div>
                                    </div>

                </div>
                <div className="row">
                            <div className="col-4">
                            <div class="input-group mb-1">
                                <label class="input-group-text" for="inputGroupSelectS11">Access Type</label>
                                <select class="form-select" id="inputGroupSelectS12">
                                    <option selected>Select</option>
                                    <option value="ADBasicInformation">Basic Information</option>
                                    <option value="ADOverrideLogs">Override Logs</option>
                                </select>
                            </div>
                            </div>
                            <div className="row">
                                        <div className="col-4">
                                        <div class="input-group mb-1">
                                            <label class="input-group-text" for="inputGroupSelect01">Access Type</label>
                                            <select class="form-select" id="inputGroupSelect01">
                                                <option selected>Select</option>
                                                <option value="ADBasicInformation">Basic Information</option>
                                                <option value="ADOverrideLogs">Override Logs</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="col">
                                            <div class="input-group mb-1">
                                                <span class="input-group-text" id="from">Period Covered</span>
                                                <span class="input-group-text" id="from">from</span>
                                                <input type="text" class="form-control" placeholder="mm" aria-label="mm" aria-describedby="from"></input>
                                                <input type="text" class="form-control" placeholder="dd" aria-label="dd" aria-describedby="from"></input>
                                                <input type="text" class="form-control" placeholder="yyyy" aria-label="yyyy" aria-describedby="from"></input>

                                                <span class="input-group-text" id="to">to</span>
                                                <input type="text" class="form-control" placeholder="mm" aria-label="mm" aria-describedby="to"></input>
                                                <input type="text" class="form-control" placeholder="dd" aria-label="dd" aria-describedby="to"></input>
                                                <input type="text" class="form-control" placeholder="yyyy" aria-label="yyyy" aria-describedby="to"></input>
                                            </div>
                                        </div>
                                </div>
                                <div className="row p-2">
                                    < button type="button" class="btn btn-success">Search Database</button>
                                </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}



export default DatabaseModifier