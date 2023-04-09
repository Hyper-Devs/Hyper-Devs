import "./Database-Result.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function DatabaseResult(){
    return(
        <div className="container-md mb-3">
        <div className="container-md border p-3">
        <div className="row justify-content-end">
            <div className="col-4 align-self-end">
                <div class="input-group mb-1">
                    <label class="input-group-text" for="inputGroupSelectAD1">Sort</label>
                    <select class="form-select" id="inputGroupSelectAD2">
                        <option selected>Select</option>
                        <option value="ADBasicInformation">Alphabe tically</option>
                        <option value="ADOverrideLogs">Recent Logs</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="row mb-5">
            RESULTS WILL SHOW HERE
        </div>
    </div>
    </div>
    )

}
export default DatabaseResult