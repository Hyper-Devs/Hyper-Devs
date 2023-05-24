import './accountsettingsmodal.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function AccSett(){
    return(
        <div className="div">
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AccSettModal">
            Launch demo modal
            </button> */}

            <div class="modal fade" id="AccSettModal" tabindex="-1" aria-labelledby="AccSettModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-light" id="AccSettModalLabel">Account Settings</h1>
                    <button type="button" class="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="row">
                        <div className="col text-center"></div>'
                        <div className="row-4">
                            <img class = "mx-auto d-block" src="icons/Profile Icon.svg" alt="Profile Icon" srcSet="" />
                        </div>
                        <div className="row text-center"> <h3>Norren Mercado</h3></div>
                        <div className="row text-center"> <h5>Secretary</h5></div>
                        <div className="row px-5"> 
                            <div className="col-4 p-2 rounded-start bg-success text-center text-light">Access Type</div>
                            <div className="col p-2 border rounded-end"></div>
                        </div>
                        <div className="row px-5 pt-3">
                        <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#ChangePassCollapse" aria-expanded="false" aria-controls="ChangePassCollapse">
                            Change Password
                        </button>
                        <div class="collapse pt-1 p-0" id="ChangePassCollapse">
                            <div class="card card-body">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="old-pass">
                                <img class = "mx-auto d-block" src="Assets/Vectors/Key.png" alt="Key Icon" srcSet="" />
                                </span>
                                <input type="text" class="form-control" placeholder="Enter Current Password" aria-label="OldPass" aria-describedby="old-pass"></input>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="new-pass">
                                <img class = "mx-auto d-block" src="/Vectors/Key.png" alt="Key Icon" srcSet="" />
                                </span>
                                <input type="text" class="form-control" placeholder="Enter New Password" aria-label="NewPass" aria-describedby="new-pass"></input>
                            </div>
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#ChangePassModal">
                            Save Changes
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="ChangePassModal" tabindex="-1" aria-labelledby="ChangePassModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-success">
                    <h1 class="modal-title fs-5 text-light " id="ChangePassModalLabel">Change Password</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                Add validation whether change password is succes or not.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default AccSett