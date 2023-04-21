import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function BSNewSResults(){
    return(
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col">
                    <div className="row border border-success bg-secondary bg-opacity-25 rounded p-3">
                    <div class="input-group mb-3">
                    <input type="number" class="form-control" placeholder="Enter Number of Students" aria-describedby="button-enterRange"></input>
                    <button class="btn btn-success text-light btn-outline-secondary" type="button" id="button-genFormIDNo">Generate Forms and ID Numbers</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BSNewSResults