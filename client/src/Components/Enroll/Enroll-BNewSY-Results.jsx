import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function EnrollBNewSYResults(){
    return(
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col px-5 py-3 border border-success rounded bg-secondary bg-opacity-10 ">
                    <div className="row bg-success bg-opacity-50 border border-success rounded-top p-3">
                    <p class="h5 fw-bold text-center text-black">Previous Class</p>
                        <div class="input-group">
                            <label class="input-group-text " for="inputGroupBNewSYGrade">Grade</label>
                            <select class="form-select bg-success bg-opacity-25" id="inputGroupBNewSYGrade">
                                <option selected>Select</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <label class="input-group-text " for="inputGroupBNewSYSection">Section</label>
                            <select class="form-select bg-success bg-opacity-25" id="inputGroupBNewSYSection">
                                <option selected>Select</option>
                                <option value="---">---</option>
                            </select>
                        </div>
                    </div>
                    <div className="row p-1 border border-success rounded-bottom mb-1"> 
                        <ul class="list-group overflow-scroll">
                            <li class="list-group-item">
                                <input class="form-check-input me-1" type="checkbox" value="" id="name1"></input>
                                <label class="form-check-label" for="name1">Dela Cruz, J.L.</label>
                            </li>
                            <li class="list-group-item">
                                <input class="form-check-input me-1" type="checkbox" value="" id="name2"></input>
                                <label class="form-check-label" for="name2">Gonzaga, T.</label>
                            </li>
                            <li class="list-group-item">
                                <input class="form-check-input me-1" type="checkbox" value="" id="name3"></input>
                                <label class="form-check-label" for="name3">Villanueva, M. </label>
                            </li>
                        </ul>
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
