import React from "react";
import "./Database-Result.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import CircleIcon from '@mui/icons-material/Circle';

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
                        <p className="dbheader-name">Name</p>
                        <p className="dbheader-grade-section">Grade&Section</p>
                        <p className="dbheader-status">Status</p>
                        <p className="dbheader-actions">Actions</p>
                    </div>
                    <ul className="dbResult-list"> 
                        {searchResult.map(item => (
                            <li key={item.id} 
                                className="dbItems"
                                id={(item.id)%2 === 0 ? 'dbItems-even' : ''}>
                                <div id='profileIcon'><AccountCircleIcon fontSize="large"/></div>
                                <div id="displayName">{item.first_name} {item.middle_name} {item.last_name}</div>
                                <div id="displayEmail">{item.grade_level}-{item.section_name}</div>
                                <div id="displayStatus"><CircleIcon color="success"/></div>
                                {/* <div id="action-icon"><EditIcon/></div> */}
                                <button id="action-icon" data-bs-toggle= "modal" data-bs-target="#editDBModal" ><EditIcon/></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div class="modal fade" id="editDBModal" tabindex="-1" aria-labelledby="editDBModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header bg-success text-light">
                        <h1 class="modal-title fs-5" id="editDBModalLabel">Edit Information</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default DatabaseResult;