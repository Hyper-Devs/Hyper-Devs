import "./Profile-Account.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function ProfileAccount(){
    return(
        <div className="container-fluid border">
            <div className="row">
                <div className="col-5 border">
                    <div className="row border bg-danger "> <p class="text-center text-light fs-3 fw-bold">Account Information</p></div>
                    <div className="row border p-3">
                        <div className="row">Insert Picture Here
                        <div class="text-center">
                        <img src="../Assets/Group 98.png" class="rounded" alt="ProfileIcon"></img>
                        </div>
                        </div> 
                        <div className="row">Norren Mercado</div>
                        <div className="row">Clerk</div>
                        <div className="row text-start"><p class="text-start lh-1">ID Number:</p></div>
                        <div className="row text-start"><p class="text-start lh-1   ">Password:</p></div>
                        <div className="row">
                        <button type="button" class="btn btn-danger">Danger</button>
                        </div>
                    </div>
                
                
                </div>
                <div className="col-auto border">Profile Access</div>
            </div>
        </div>
    )

}
export default ProfileAccount