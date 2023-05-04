import axios from 'axios';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function EnrollBNewSYResults(){
    const [selectedGL, setGLFilter] = useState("Select");
    const [selectedSection, setSectionFilter] = useState("Select");

    const [hasEnteredEnrollForm, setHasEnteredEnrollForm] = useState(false);
    const [availSections, setAvailSections] = useState({})
    const gradeLevels = Object.keys(availSections);
    const gradeLevelOptions = gradeLevels.map((gradelevel) => ({value: gradelevel, label: gradelevel}))
    const [sectionOptions, setSectionOptions] = useState([]);
    const [selectedSY, setSYFilter] = useState("Select");
    const [studentVal, setStudentVal] = useState([]);


    const onClick = () => {
        fetchStudents(selectedGL, selectedSection);
    };
    
    function updateSelectedGL(event){
        if (event.target.value !== 'Select')
            setGLFilter(event.target.value);
    }

    function updateSelectedSection(event){
        if (event.target.value !== 'Select')
            setSectionFilter(event.target.value);
    }

    function enrollFormEnter () {
        if (hasEnteredEnrollForm == false) { fetchAvailRooms(); }
        setHasEnteredEnrollForm(true)
    };

    const fetchStudents = async (gradeLevel, section) => {
        try {
            //once again, fix this so the school year is not hard coded
            const response = await axios.get(`http://localhost:8800/database/students/batch/${'2023-2024'}/${gradeLevel}/${section}`);
            if (response.status == 200){
                console.log(response.data)
                var students = response.data.map((student) => ({id: "name1", sId: student.id, name: student.first_name+" "+student.last_name}))
                setStudentVal(students);
            }
        } catch (err) {
            console.log(err);
        }
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


    return(
        <div className="container-fluid p-3" onMouseOver={enrollFormEnter}>
            <div className="row">
                <div className="col px-5 py-3 border border-success rounded bg-secondary bg-opacity-10 ">
                    <div className="row bg-success bg-opacity-50 border border-success rounded-top p-3">
                    <p class="h5 fw-bold text-center text-black">Previous Class</p>
                        <div class="input-group">
                            <label class="input-group-text " for="inputGroupBNewSYGrade">Grade</label>
                            <select 
                                name="student-grade-level"
                                class="form-select bg-success bg-opacity-25" 
                                id="inputGroupBNewSYGrade"
                                onClick={(e) => updateSelectedSY(e)}
                                onChange={(e) => updateSelectedGL(e)}
                            >
                                <option selected>Select</option>
                                {gradeLevelOptions.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                            </select>
                            
                            <label class="input-group-text " for="inputGroupBNewSYSection">Section</label>
                            <select 
                                name="student-section"
                                class="form-select bg-success bg-opacity-25" 
                                id="inputGroupSelect01"
                                onClick={() => updateGLStudentFilter()}
                                onChange={(e) => updateSelectedSection(e)}
                            >
                                <option selected>Select</option>
                                {sectionOptions.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="row p-1 border border-success rounded-bottom mb-1">     
                        <button onClick={onClick} > Generate Students </button>
                        {(studentVal)   && 
                            <ul class="list-group overflow-scroll" style={{"height": "150px", "overflow-y": "scroll"}}>
                                {studentVal.map(
                                    ({ id, sId, name }, index) =>               
                                        <li class="list-group-item">
                                            <input class="form-check-input me-1" type="checkbox" value={sId} id={id}></input>
                                            <label class="form-check-label" for="name1">{name}</label>
                                        </li>
                                    )
                                }
                            </ul>
                        }
                    </div>
                    <div className="row bg-success bg-opacity-50 border border-success rounded-top p-3">
                    <p class="h5 fw-bold text-center text-black">Updated Class</p>
                        <div class="input-group">
                            <label class="input-group-text " for="inputGroupBNewSYGradeNew">Grade</label>
                            <select class="form-select bg-success bg-opacity-25" id="inputGroupBNewSYGradeNew">
                                <option selected>Select</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <label class="input-group-text " for="inputGroupBNewSYSectionNew">Section</label>
                            <select class="form-select bg-success bg-opacity-25" id="inputGroupBNewSYSectionNew">
                                <option selected>Select</option>
                                <option value="---">---</option>
                            </select>
                        </div>
                    </div>
                    <div className="row p-3 border border-success rounded-bottom mb-1 "> 
                        <div className="col-fluid">
                        <div class="d-grid gap-2">
                            <button class="btn btn-success" type="button">Update Class List</button>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                    <label for="SInfo" class="form-label text-center text-success">or </label>
                    </div>
                    <div className="row p-3 mb-2 border border-success rounded"> 
                        <label for="SInfo" class="form-label text-center text-success">UPLOAD CLASS LIST</label>
                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupFile01">Upload</label>
                            <input type="file" class="form-control bg-success bg-opacity-50" id="inputGroupFile01"></input>
                        </div>
                        </div>
                    <div className="row">
                        <button type="button" class="btn btn-success">Enroll Student</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EnrollBNewSYResults
