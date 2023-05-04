import React from "react";
import "./Database-Result.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function DatabaseResult(props) {

    const { searchResult } = props;

    if (!Array.isArray(searchResult)) {
        return (
            <div className="container-md mb-3">
                <div className="container-md border p-3">
                    <div className="row justify-content-end">
                        <div className="col-4 align-self-end">
                            <div class="input-group mb-1">
                                <label class="input-group-text" for="inputGroupSelectAD1">Sort</label>
                                <select class="form-select" id="inputGroupSelectAD2">
                                    <option selected>Select</option>
                                    <option value="ADBasicInformation">Alphabetically</option>
                                    <option value="ADOverrideLogs">Recent Logs</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5 align-content-center">
                        RESULTS WILL SHOW HERE
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-md mb-3">
            <div className="container-md border p-3">
                <div className="row justify-content-end">
                    <div className="col-4 align-self-end">
                        <div class="input-group mb-1">
                            <label class="input-group-text" for="inputGroupSelectAD1">Sort</label>
                            <select class="form-select" id="inputGroupSelectAD2">
                                <option selected>Select</option>
                                <option value="ADBasicInformation">Alphabetically</option>
                                <option value="ADOverrideLogs">Recent Logs</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-5 m-3">
                    <div className="dbresult-header">
                        <p>Name</p>
                        <p>Email</p>
                        <p>Status</p>
                    </div>
                    <ul className="dbResult-list"> 
                        {searchResult.map(item => (
                            <li key={item.id} 
                                className="dbItems">
                                <div id='profileIcon'><AccountCircleIcon/></div>
                                <div id="displayName">{item.first_name} {item.last_name}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default DatabaseResult;