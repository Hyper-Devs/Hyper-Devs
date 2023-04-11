import "./Enroll-Ind-Results.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function EnrollIndResult(){
    return (
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col border border-success rounded bg-secondary bg-opacity-25 px-5 py-3"> 
                <div class="input-group mb-2">
                    <button class="btn btn-success" type="button" id="SIDnumber">Generate ID Number</button>
                    <input type="text" class="form-control" placeholder="or Enter an ID Number" aria-label="SIDnumber" aria-describedby="SIDnumber"></input>
                </div>
                <div className="row p-3 border border-success rounded mb-2">
                    <label for="SInfo" class="form-label text-center text-success">STUDENT'S INFORMATION</label>
                        <div class="input-group mb-1">
                            <span class="input-group-text">Name</span>
                            <input type="text" class="form-control" placeholder="First Name" aria-label="SFN" aria-describedby="SFN"></input>
                            <input type="text" class="form-control" placeholder="Middle Name" aria-label="SMN" aria-describedby="SFN"></input>
                            <input type="text" class="form-control" placeholder="Last Name" aria-label="SLN" aria-describedby="SFN"></input>
                        </div>
                        <div className="row-flex">
                            <div class="input-group mb-3">
                                <label class="input-group-text" for="inputGroupSelect01">Grade</label>
                                    <select class="form-select bg-success bg-opacity-25" id="inputGroupSelect01">
                                        <option selected>Select</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                <label class="input-group-text" for="inputGroupSelect01">Section</label>
                                    <select class="form-select bg-success bg-opacity-25" id="inputGroupSelect01">
                                        <option selected>Select</option>
                                        <option value="S1">---</option>
                                    </select>
                            </div>
                        </div>                   
                </div>
                <div className="row mb-1 p-3 border border-success rounded">
                    <label for="SInfo" class="form-label text-center text-success">CONTACT INFORMATION</label>
                    <div class="input-group mb-1">
                            <span class="input-group-text">Name</span>
                            <input type="text" class="form-control" placeholder="First Name" aria-label="PFN" aria-describedby="PFN"></input>
                            <input type="text" class="form-control" placeholder="Middle Name" aria-label="PMN" aria-describedby="PFN"></input>
                            <input type="text" class="form-control" placeholder="Last Name" aria-label="PLN" aria-describedby="PFN"></input>
                    </div>
                    <div class="input-group">
                            <span class="input-group-text">Relationship</span>
                            <input type="text" class="form-control" placeholder="Relationship" aria-label="PRelationship" aria-describedby="PRelationship"></input>

                            <span class="input-group-text">Contact No.</span>
                            <span class="input-group-text bg-success bg-opacity-25">+63</span>
                            <input type="number" class="form-control" placeholder="9XXXXXXXXXX" aria-label="PRelationship" aria-describedby="PRelationship"></input>
                    </div>
                </div>
                <div className="row">
                    <label for="SInfo" class="form-label text-center text-success">or </label>
                </div>
                <div className="row p-3 mb-2 border border-success rounded"> 
                    <label for="SInfo" class="form-label text-center text-success">UPLOAD STUDENT INFORMATION</label>
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

export default EnrollIndResult