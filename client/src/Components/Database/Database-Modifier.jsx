import { useState, useEffect } from "react";
import DatePicker from 'react-datepicker'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SearchIcon from '@mui/icons-material/Search';
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Popover from '@mui/material/Popover';
import "./Database-Modifier.css";
import GlobalModal from '../Modal/globalmodal';
import api from '../../api/api';



function DatabaseModifier(props){
    const [accessType, setAccessType] = useState('BasicInformation');

    const [studentFilter, setStudentFilter] = useState("None");
    const school_years = Object.keys(studentFilter);
    const st_school_years = school_years.map((school_year) => ({value: school_year, label: school_year}))
    const [st_grade_level, setSt_grade_level] = useState([]);
    const [st_sections, setSt_sections] = useState([]);

    const [selectedSY, setSYFilter] = useState("Select");
    const [selectedGL, setGLFilter] = useState("Select");
    const [selectedSection, setSectionFilter] = useState("Select");
    
    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

    // const [showHowToModal, setShowHowToModal] = useState(false); // State to control the visibility of the modal
    const [rangeStart, setRangeStart] = useState(new Date)
    const defaultEndDate = new Date()
    const [rangeEnd, setRangeEnd] = useState(defaultEndDate)
    defaultEndDate.setDate(defaultEndDate.getDate() + 7)

    const [searchResult, setSearchResult] = useState('');


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

    function updateSelectedSY(event){
        if (event.target.value !== 'Select'){
            setSYFilter(event.target.value);
        }
    }

    function updateSelectedGL(event){
        if (event.target.value !== 'Select'){
            setGLFilter(event.target.value);
            document.forms['student-search-form']['student-section'].value = 'Select';
        }
    }

    function updateSelectedSection(event){
        if (event.target.value !== 'Select')
            setSectionFilter(event.target.value);
    }

    function updateGLStudentFilter(){
        //updates the grade level options
        if (selectedSY !== 'Select'){
            const grade_levels = Object.keys(studentFilter[selectedSY]);
            setSt_grade_level(grade_levels.map((grade_level) => ({value: grade_level, label: grade_level})))
        }
    }

    function updateSectionStudentFilter(){
        //updates the sections options
        if (selectedGL !== 'Select'){
            const sections = studentFilter[selectedSY][selectedGL];
            setSt_sections(sections.map((section) => ({value: section, label: section})))
        }
    }

    useEffect(() => {
        fetchStudentFilter();
    }, []);



    // functions for fetching the student or admin from the database

    function handleSubmitStudent(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        if (formJson["student-prim-info"] !== '' || formJson['student-school-year'] !== 'Select'){
            var date_start = "01-01-2023"
            var date_end = "01-01-2023"
            if (Object.keys(formJson).includes('date-start')){
                date_start = formJson['date-start'].replaceAll('/', '-')
                date_end = formJson['date-end'].replaceAll('/', '-')

                formJson['date-start'] = date_start;
                formJson['date-end'] = date_end;
            }
            fetchStudent(formJson);
        }
        else {
            setTitleModal("Request processed successfully");
            setBodyModal("No information entered")
            setShowModal(true)
        }       
    }

    function handleSubmitAdmin(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        var date_start = "01-01-2023"
        var date_end = "01-01-2023"
        if (Object.keys(formJson).includes('date-start')){
            date_start = formJson['date-start'].replaceAll('/', '-')
            date_end = formJson['date-end'].replaceAll('/', '-')
        }
        fetchAdminInfo(formJson['user-name'], formJson['user-role'], formJson['access-type'], date_start, date_end)
    }

    const fetchAdminInfo = async (user_name, user_role, access_mode, date_start, date_end) => {
        try {
            var result;
            switch (access_mode){
                case "BasicInformation":
                    result = await api.get(`/database/admin/admin-info/${user_name}/${user_role}`);
                    break;
                
                case "Logs":
                    result = await api.get(`/database/admin/override-logs/${user_name}/${user_role}/${date_start}/${date_end}`);
                    break
            }
            setSearchResult(result.data)
        } catch (error){
            setTitleModal("Request processed unsuccessfully");
            setBodyModal("An error occurred")
            setShowModal(true)
        }
    };

    const fetchStudent = async (searchVal) => {
        try {
            var searchValExist = [
                searchVal["student-prim-info"] !== '',
                searchVal['student-school-year'] !== 'Select',
                searchVal['student-grade-level'] !== 'Select',
                searchVal['student-section'] !== 'Select',
                Object.keys(searchVal).includes('access-type'),
                Object.keys(searchVal).includes('date-start'),
                Object.keys(searchVal).includes('date-end'),
            ];
            
            var result;
            switch (JSON.stringify(searchValExist)){        
                //calling different APIs for different search functions
                case JSON.stringify([true, true, false, false, true, false, false]):
                    result = await api.get(`/database/student-filter/student/${searchVal["student-prim-info"]}/${searchVal["student-school-year"]}`);
                    break
                case JSON.stringify([true, true, true, false, true, false, false]):
                    result = await api.get(`/database/student-filter/student/${searchVal["student-prim-info"]}/${searchVal["student-school-year"]}/${searchVal["student-grade-level"]}`);
                    break
                case JSON.stringify([true, true, true, true, true, false, false]):
                    result = await api.get(`/database/student-filter/student/${searchVal["student-prim-info"]}/${searchVal["student-school-year"]}/${searchVal["student-grade-level"]}/${searchVal["student-section"]}`);
                    break
                case JSON.stringify([false, true, false, false, true, false, false]):
                    result = await api.get(`/database/students/batch/${searchVal['student-school-year']}`)
                    break
                case JSON.stringify([false, true, true, false, true, false, false]):
                    result = await api.get(`/database/students/batch/${searchVal['student-school-year']}/${searchVal['student-grade-level']}`)
                    break
                case JSON.stringify([false, true, true, true, true, false, false]):
                    result = await api.get(`/database/students/batch/${searchVal['student-school-year']}/${searchVal['student-grade-level']}/${searchVal['student-section']}`)
                    break
                case JSON.stringify([true, true, true, true, true, true, true]):
                    result = await api.get(`/database/student-filter/student/${searchVal["student-prim-info"]}/${searchVal["student-school-year"]}/${searchVal["student-grade-level"]}/${searchVal["student-section"]}/${searchVal["date-start"]}/${searchVal["date-end"]}`);
                    break
                default:
                    result = "Input error"
            }

            if (result !== "Input error"){
                if (result.data != null){ setSearchResult(result.data) }
                else{ setSearchResult([]) }
            }
            else {
                setTitleModal("Request processed successfully");
                setBodyModal("Input error. Try again")
                setShowModal(true)
            }
            
        } catch (error){
            setTitleModal("Request processed unsuccessfully");
            setBodyModal("An error occurred")
            setShowModal(true)
        }
    };

    props.setSearchResult(searchResult);

    // const handleOpenModal = () => {setShowHowToModal(true);};
    
    const handleChange = (event) => {setAccessType(event.target.value);};

    const handleCloseModal = () => { setShowModal(false); };

    const selectStartDate = (d) => { setRangeStart(d) }

    const selectEndDate = (d) => { setRangeEnd(d) }

    const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
    const isPopoverOpen = Boolean(popoverAnchorEl);
  
    const handlePopoverOpen = (event) => {
      setPopoverAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setPopoverAnchorEl(null);
    };
    

    return(
        <div className="container-md p-3 ">
            <nav>
                <div class="nav nav-tabs border border-success border-bottom-0 " id="nav-tab" role="tablist">
                    <button class="nav-link active text-black" id="nav-student-tab" data-bs-toggle="tab" data-bs-target="#nav-student" type="button" role="tab" aria-controls="nav-student" aria-selected="true">Student Information</button>
                    <button class="nav-link text-black" id="nav-admin-tab" data-bs-toggle="tab" data-bs-target="#nav-admin" type="button" role="tab" aria-controls="nav-admin" aria-selected="false">Admin Information</button>
                    {/* <HelpOutlineIcon style={{position:'relative', marginTop: 7, color: 'white'}} type="button" onClick={handleOpenModal}></HelpOutlineIcon> */}
                </div>
            </nav>
            <div class="tab-content border border-success border-top-0 " id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-student" role="tabpanel" aria-labelledby="nav-student-tab">
                    <div className="container-md ">
                        <form name='student-search-form' onSubmit={handleSubmitStudent}>
                            <div className="row">
                                <div class="input-group mb-1">
                                    <span class="input-group-text  " id="basic-addonS1"><PersonSearchIcon/></span>
                                    <input 
                                        name='student-prim-info'
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Enter Name or Number or Class" 
                                        aria-label="StudentInfo" 
                                        aria-describedby="basic-addonS2" 
                                    >
                                    </input>
                                    <span className="icon-wrapper">
                                    <HelpOutlineIcon className="helpIcon" type="button" onClick={handlePopoverOpen} />
                                    </span>

                                </div>
                                <Popover
                                    open={isPopoverOpen}
                                    anchorEl={popoverAnchorEl}
                                    onClose={handlePopoverClose}
                                    anchorOrigin={{
                                    vertical: 'bottom',
                                    // horizontal: 'center',
                                    
                                    }}
                                    transformOrigin={{
                                    // vertical: 'bottom',
                                    horizontal: 'left',
                                    }}
                                    classes={{
                                        paper: 'custom-popover'
                                    }}
                                >
                                    {/* Content of the popover */}
                                    <div className='row ms-3 p-1' >
                                        <div className="row p-3 border border-success rounded bg-success bg-opacity-25">
                                            <h6 className='text-center fw-bold'>Database Navigation Help</h6>
                                            <ul>
                                                <li>(1) Search bar accepts ID and Student ID</li>
                                                <li>(2) One attribute or dropdown should be modified when using search bar.</li>
                                                <li>(3) Search multiple students using school year, grade level, and section (e.g., <i>2023-2024 7-Obedient</i>)</li>
                                            </ul>
                                        </div>
                                    
                                    </div>
                                </Popover>
                                <div className="col">
                                    <div class="input-group mb-1">
                                        <label class="input-group-text" for="inputGroupSelectS5">School Year</label>
                                        <select 
                                            name="student-school-year"
                                            class="form-select" 
                                            id="inputGroupSelectS6"
                                            onClick={(e) => updateSelectedSY(e)}
                                            required
                                        >
                                            <option selected >Select</option>
                                            {st_school_years.map(({ value, label }) => <option value={value} >{label}</option>)}
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
                                                <option selected >Select</option>
                                                {st_grade_level.map(({ value, label }) => <option value={value} >{label}</option>)}
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
                                            <option selected >Select</option>
                                            {st_sections.map(({ value, label }  ) => <option value={value} >{label}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>  
                            <div className="row gap-1 ">
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
                                            <option value="BasicInformation">Basic Information</option>
                                            <option value="Attendance">Attendance</option>
                                        </select>
                                    </div>
                                </div>
                                {accessType === "Attendance" && 
                                    <div className="col">
                                        <div class="input-group">
                                            <div className="col me-4 rounded bg-light  " align="center">
                                                <DatePicker
                                                    className='custom-datepicker'
                                                    name="date-start"
                                                    selectsStart
                                                    selected={rangeStart}
                                                    startDate={rangeStart}
                                                    endDate={rangeEnd}
                                                    onChange={selectStartDate}
                                                /></div>
                                            <div className="col rounded bg-light " align="center" >
                                            <div class="input-group">
                                                <DatePicker
                                                    className='custom-datepicker'
                                                    name="date-end"
                                                    selectsEnd
                                                    selected={rangeEnd}
                                                    startDate={rangeStart}
                                                    endDate={rangeEnd}
                                                    onChange={selectEndDate}
                                            />
                                            </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="row p-2">
                                <button type="submit" class="btn btn-success" style={{ backgroundColor: "#00573F", color: "white" }} > <SearchIcon /> Search Database </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-admin" role="tabpanel" aria-labelledby="nav-admin-tab">
                    <div className="container-md ">
                        <form onSubmit={handleSubmitAdmin}>
                            <div className="row">
                                <div class="input-group mb-1">
                                    <span class="input-group-text" id="basic-addon1"><PersonSearchIcon/></span>
                                    <input 
                                        name="user-name"
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Enter Name or Position" 
                                        aria-label="StudentInfo" 
                                        aria-describedby="basic-addonS3"
                                        required
                                    ></input>
                                </div>
                                <div className="col">
                                    <div class="input-group mb-1">
                                        <label class="input-group-text" for="inputGroupSelectS9">Position</label>
                                        <select 
                                            name="user-role"
                                            class="form-select" 
                                            id="inputGroupSelectS10" 
                                            required
                                        >
                                            <option value="Admin">Admin</option>
                                            <option value="Faculty">Faculty</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col-4">
                                    <div class="input-group">
                                        <label class="input-group-text" for="inputGroupSelect11">Access Type</label>
                                        <select 
                                            name="access-type"
                                            class="form-select" 
                                            id="inputGroupSelect12" 
                                            value={accessType}
                                            onChange={handleChange}
                                        >
                                            <option value="BasicInformation">Basic Information</option>
                                            <option value="Logs">Override Logs</option>
                                        </select>
                                    </div>
                                </div>
                                {accessType === "Logs" &&
                                    <div className="col">
                                    <div class="input-group">
                                        <div className="col me-4 rounded bg-light " align="center">
                                            <DatePicker
                                                className='custom-datepicker'
                                                name="date-start"
                                                selectsStart
                                                selected={rangeStart}
                                                startDate={rangeStart}
                                                endDate={rangeEnd}
                                                onChange={selectStartDate}
                                            /></div>
                                        <div className="col rounded bg-light " align="center" >
                                        <div class="input-group">
                                            <DatePicker
                                                className='custom-datepicker'
                                                name="date-end"
                                                selectsEnd
                                                selected={rangeEnd}
                                                startDate={rangeStart}
                                                endDate={rangeEnd}
                                                onChange={selectEndDate}
                                        />
                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                    
                                }   
                            </div>
                            <div className="row p-2">
                                <button type="submit" class="btn btn-success" style={{ backgroundColor: "#00573F", color: "white" }}> <SearchIcon /> Search Database </button>
                            </div>
                        </form>
                    </div>
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
    );
}



export default DatabaseModifier