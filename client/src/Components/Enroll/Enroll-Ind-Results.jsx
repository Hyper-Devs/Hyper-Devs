import axios from 'axios';
import { useState, useEffect } from "react";
import "./Enroll-Ind-Results.css"
import GlobalModal from '../Modal/globalmodal';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import api from "../../api/api"


function EnrollIndResult(){
    const [hasEnteredEnrollForm, setHasEnteredEnrollForm] = useState(false);
    const [availSections, setAvailSections] = useState({})
    const gradeLevels = Object.keys(availSections);
    const gradeLevelOptions = gradeLevels.map((gradelevel) => ({value: gradelevel, label: gradelevel}))
    const [sectionOptions, setSectionOptions] = useState([]);
    const [selectedSY, setSYFilter] = useState("Select");

    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // functions for setting up the grade levels and sections options
    const fetchAvailRooms = async () => {
        try {
            const response = await api.get(`/enroll/available-rooms`);
            setAvailSections(response.data)
        } catch (err) {
            setTitleModal("Request processed unsuccessfully");
            setBodyModal("An error occurred")
            setShowModal(true)
        }
    };

    function updateSelectedSY(event){
        if (event.target.value !== 'Select'){
            setSYFilter(event.target.value);
        }
    };

    function updateGLStudentFilter(){
        if (selectedSY !== 'Select'){
            const sections = availSections[selectedSY];
            setSectionOptions(sections.map((section) => ({value: section, label: section})))
        }
    };

    useEffect(() => { fetchAvailRooms(); }, []);


    // functions for handling the posting of the student information
    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        addStudent(formJson)
    };

    const addStudent = async (studentInfo) => {
        setIsLoading(true);

        // Simulating server processing time
        setTimeout(() => {
          setIsLoading(false);
          // Handle the server response here
        }, 2000); // Assuming 2 seconds for processing

        try {
            const result = await api.post(`/enroll/new-student`, studentInfo);
            if (result.status === 210){
                setTitleModal("Enrollment success");
                setBodyModal(result.data)
                setShowModal(true)
            }
            else{
                setTitleModal("Enrollment unsuccessful");
                setBodyModal(result.data);
                setShowModal(true);
            }

        } catch (error){
            setTitleModal("Internal Error");
            setBodyModal("An error occured. Refresh the page");
            setShowModal(true);
        }
    };


    return (
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col border border-success rounded bg-secondary bg-opacity-25 px-5 py-3"> 
                    <form onSubmit={handleSubmit}>
                        <div class="input-group mb-2">
                            <button class="btn btn-success" type="button" id="SIDnumber">Generate ID Number</button>
                            <input 
                                name="student-rfid"
                                type="text" 
                                class="form-control" 
                                placeholder="or Enter an ID Number" 
                                aria-label="SIDnumber" 
                                aria-describedby="SIDnumber"
                                required
                            ></input>
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
                                                {gradeLevelOptions.map(({ value, label }) => <option value={value} >{label}</option>)}
                                            </select>
                                        <label class="input-group-text" for="inputGroupSelect01">Section</label>
                                            <select 
                                                name="student-section"
                                                class="form-select bg-success bg-opacity-25" 
                                                id="inputGroupSelect01"
                                                onClick={() => updateGLStudentFilter()}
                                            >
                                                <option selected>Select</option>
                                                {sectionOptions.map(({ value, label }) => <option value={value} >{label}</option>)}
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
                                    type="text" 
                                    class="form-control" 
                                    placeholder="9XXXXXXXXXX" 
                                    aria-label="PRelationship" 
                                    aria-describedby="PRelationship" 
                                    title='Please enter exactly 10 digits'
                                    pattern="[0-9]{10}"
                                    required
                                ></input>
                            </div>
                        </div>
                            <div className="row">
                                <button type="submit" disabled={isLoading} class="btn btn-success">{isLoading ? 'Loading...' : 'Enroll'}</button>
                            </div>
                    </form>
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



export default EnrollIndResult