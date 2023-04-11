import "./Enroll-Modifier.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function EnrollModifier(){
    return(
        <div className="container-fluid p-3">
        <div className="row ">
            <div className="col border"> 
                <div className="row ">
                    <div className="row rounded-top bg-success mt-3"><p class="fs-5 fw-bold text-center text-light ">Enroll Options</p></div>
                    <div className="row rounded-bottom m-3 ">
                
                <div class="accordion" id="accordionEnrollType">
                <div class="accordion gap-3" id="accordionPanelsStayOpenStudent">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <div class="d-grid gap-1 mb-2">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Student Enroll
                        </button>
                        </div>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                        <div class="d-grid gap-1 mb-2">
                            <button class="btn border " type="button">Individual Enroll</button>
                        </div>

                        <div class="dropdown">

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Batch Enroll
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            <div class="d-grid gap-2">
                                <button class="btn border " type="button">Incoming Students</button>
                                <button class="btn border " type="button">New School Year</button>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                        </div>
                    </div>
                
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Admin Enroll
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        <div class="d-grid gap-1 mb-2">
                            <button class="btn border " type="button">Individual Enroll</button>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="row ">
            <div className="col"> 
                <div className="row ">
                    <div className="row rounded-top bg-success pt-3"><p class="fs-5 fw-bold text-center text-light ">Enroll Settings</p></div>
                    <div className="row rounded-bottom p-3 ">
                    
                    <div class="accordion" id="accordionEnrollSettings">
                    <div class="accordion" id="accordionPanelsStayOpenSettings">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                                Admin Configurations
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                            <div class="d-grid gap-2 mb-2">
                                <button class="btn border " type="button">Add a Section</button>
                                <button class="btn border " type="button">Delete a Section</button>
                                <button class="btn border " type="button">Delete a Student</button>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default EnrollModifier