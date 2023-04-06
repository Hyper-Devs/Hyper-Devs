import "./Database-Modifier.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function DatabaseModifier(){
    return(
        <div className="container-md p-3  ">
        <nav>
        <div class="nav nav-tabs border border-success-subtle" id="nav-tab" role="tablist">
            <button class="nav-link active text-black" id="nav-student-tab" data-bs-toggle="tab" data-bs-target="#nav-student" type="button" role="tab" aria-controls="nav-student" aria-selected="true">Student Information</button>
            <button class="nav-link text-black" id="nav-admin-tab" data-bs-toggle="tab" data-bs-target="#nav-admin" type="button" role="tab" aria-controls="nav-admin" aria-selected="false">Admin Information</button>
            
        </div>
        </nav>
        <div class="tab-content " id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-student" role="tabpanel" aria-labelledby="nav-student-tab">
                <div className="container-md ">
                    <div className="row">
                        <div class="input-group mb-1">
                                <span class="input-group-text  " id="basic-addonS1">#</span>
                                <input type="text" class="form-control" placeholder="Enter Name or Number or Class" aria-label="StudentInfo" aria-describedby="basic-addonS2"></input>
                            </div>
                            <div className="col">
                            <div class="input-group mb-1">
                                    <label class="input-group-text " for="inputGroupSelectS1">Grade Level</label>
                                        <select class="form-select" id="inputGroupSelectS2">
                                            <option selected>Select</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="9">10</option>
                                            <option value="9">11</option>
                                            <option value="9">12</option>
                                        </select>
                            </div>
                            </div>
                            <div className="col">
                                <div class="input-group mb-1">
                                    <label class="input-group-text" for="inputGroupSelectS3">Section</label>
                                    <select class="form-select" id="inputGroupSelectS4">
                                        <option selected>Select</option>
                                        <option value="---">---</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col">
                            <div class="input-group mb-1">
                                    <label class="input-group-text" for="inputGroupSelectS5">School Year</label>
                                    <select class="form-select" id="inputGroupSelectS6">
                                        <option selected>Select</option>
                                        <option value="22-23">2022-2023</option>
                                        <option value="22-24">2023-2024</option>
                                    </select>
                    </div>

                </div>
               
            </div>
                        <div className="row ">
                            <div className="col-4">
                            <div class="input-group mb-1">
                                <label class="input-group-text" for="inputGroupSelectS7">Access Type</label>
                                <select class="form-select" id="inputGroupSelectS8">
                                    <option selected>Select</option>
                                    <option value="BasicInformation">Basic Information</option>
                                    <option value="Logs/Attendance">Logs/Attendace</option>
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
        <div class="tab-pane fade" id="nav-admin" role="tabpanel" aria-labelledby="nav-admin-tab">
        <div className="container-md ">
                    <div className="row">
                        <div class="input-group mb-1">
                                <span class="input-group-text" id="basic-addonS3">#</span>
                                <input type="text" class="form-control" placeholder="Enter Name or Position" aria-label="StudentInfo" aria-describedby="basic-addonS4"></input>
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
    )
}
export default DatabaseModifier