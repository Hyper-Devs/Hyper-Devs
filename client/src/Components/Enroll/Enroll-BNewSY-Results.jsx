import axios from 'axios';
import { useState,useEffect } from "react";
import GlobalModal from "../Modal/globalmodal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import api from "../../api/api"

function EnrollBNewSYResults(){
    const [selectedGL, setGLFilter] = useState("Select");
    const [selectedSection, setSectionFilter] = useState("Select");

    const [availSections, setAvailSections] = useState({})
    const gradeLevels = Object.keys(availSections);
    const gradeLevelOptions = gradeLevels.map((gradelevel) => ({value: gradelevel, label: gradelevel}))
    const [sectionOptions, setSectionOptions] = useState([]);
    const [selectedSY, setSYFilter] = useState("Select");
    const [studentVal, setStudentVal] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');



    // functions for setting up the search filters in the Enroll page
    const fetchStudents = async (gradeLevel, section) => {
        try {
            //once again, fix this so the school year is not hard coded
            const response = await api.get(`/database/students/batch/${'2023-2024'}/${gradeLevel}/${section}`);
            if (response.status === 200){
                var students = response.data[0]['values'].map((student) => ({id: "name1", sId: student.rfid, name: student.first_name+" "+student.last_name}))
                setStudentVal(students);
            }
        } catch (err) {
            console.log(err)
            setTitleModal("Request processed unsuccessfully");
            setBodyModal("An error occurred")
            setShowModal(true)
        }
    };

    const fetchAvailRooms = async () => {
        try {
            const response = await api.get(`/enroll/available-rooms`);
            setAvailSections(response.data)
        } catch (err) {
            console.log(err);
            setTitleModal("Request processed unsuccessfully");
            setBodyModal("An error occurred")
            setShowModal(true)
        }
    };

    function updateSelectedSY(event){
        if (event.target.value !== 'Select')
            setSYFilter(event.target.value);
    };

    function updateSelectedGL(event){
        if (event.target.value !== 'Select')
            setGLFilter(event.target.value);
    }

    function updateSelectedSection(event){
        if (event.target.value !== 'Select')
            setSectionFilter(event.target.value);
    }

    function updateGLStudentFilter(){
        if (selectedSY !== 'Select'){
            const sections = availSections[selectedSY];
            setSectionOptions(sections.map((section) => ({value: section, label: section})))
        }
    };

    useEffect(() => {
        fetchAvailRooms();
    }, []);


    // functions for updating of the students' grade & section for a new AY
    function handleStudentUpdate(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        const inputValidity = [
            studentVal !== [], 
            formJson["new-student-grade-level"] !== 'Select', 
            formJson["new-student-section"] !== 'Select'
        ];

        if (inputValidity.every(i=>i===true)){
            var newObj = {"rowsToUpdate": studentVal, "new-student-grade-level": formJson["new-student-grade-level"], "new-student-section": formJson["new-student-section"]}
            updateStudents(newObj)
            revertInputFields();
        }
        else
            setTitleModal("Incomplete input")
            setBodyModal("Fill all the necessary fields")
            setShowModal(true)
    };

    const updateStudents = async (inputObject) => {
        try {
            const response = await api.put(`/enroll/batch/student-migration`, inputObject);
            console.log(inputObject)
            if (response.status === 210){
                setTitleModal("Migration success");
                setBodyModal("The selected student/s have been successfully enrolled to the next level.");
                setShowModal(true);
            }
            else{
                setTitleModal("Error");
                setBodyModal("An error occured. Try again");
                setShowModal(true);
            }
        } catch (err) {
            setTitleModal("Request processed unsuccessfully");
            setBodyModal("An error occurred")
            setShowModal(true)
        }
    };


    //Miscellaneous functions
    function handleRemove(index) {
        const newItems = [...studentVal];
        newItems.splice(index, 1);
        setStudentVal(newItems);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    
    function revertInputFields(){
        document.querySelector('#inputGroupBNewSYGrade').value = 'Select';
        document.querySelector('#inputGroupSelect01').value = 'Select';
        setStudentVal([]);
        document.forms['migrationForm']['new-student-grade-level'].value = 'Select';
        document.forms['migrationForm']['new-student-section'].value = 'Select';
    };

    const onClick = () => {
        fetchStudents(selectedGL, selectedSection);
    };





    return(
        <div className="container-fluid p-3">
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
                                {gradeLevelOptions.map(({ value, label }) => <option value={value}>{label}</option>)}
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
                                {sectionOptions.map(({ value, label }) => <option value={value}>{label}</option>)}
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
                                            <button style={{ position: "absolute", right: 0 , margin_right:5}} onClick={() => handleRemove(index)}>Remove</button>
                                        </li>
                                    )
                                }
                            </ul>
                        }
                    </div>

                    <form name="migrationForm" onSubmit={handleStudentUpdate}>
                        <div className="row bg-success bg-opacity-50 border border-success rounded-top p-3">
                            <p class="h5 fw-bold text-center text-black">Updated Class</p>
                            <div class="input-group">
                                <label class="input-group-text " for="inputGroupBNewSYGradeNew">Grade</label>
                                <select 
                                    name="new-student-grade-level"
                                    class="form-select bg-success bg-opacity-25" 
                                    id="inputGroupBNewSYGrade"
                                    onClick={(e) => updateSelectedSY(e)}
                                    onChange={(e) => updateSelectedGL(e)}
                                    required
                                >
                                    <option selected>Select</option>
                                    {gradeLevelOptions.map(({ value, label }) => <option value={value} >{label}</option>)}
                                </select>

                                <label class="input-group-text " for="inputGroupBNewSYSectionNew">Section</label>
                                <select 
                                    name="new-student-section"
                                    class="form-select bg-success bg-opacity-25" 
                                    id="inputGroupSelect01"
                                    onClick={() => updateGLStudentFilter()}
                                    onChange={(e) => updateSelectedSection(e)}
                                    required
                                >
                                    <option selected>Select</option>
                                    {sectionOptions.map(({ value, label }) => <option value={value} >{label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="row p-3 border border-success rounded-bottom mb-1 "> 
                            <div className="col-fluid">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success" type="submit">Update Class List</button>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* <div className="row">
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
                    </div> */}
                </div>
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
    )
}
export default EnrollBNewSYResults
