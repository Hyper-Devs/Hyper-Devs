import "./Enroll-Modifier.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function EnrollModifier(){
    return(
        <div className="container-md border p-3">enroll
        <div className="row-fluid">
            <div className="col-5  p-3">
                <div className="row border border-2 rounded border-black ">
                <div className="row rounded-top pt-3 bg-success"><p class="fs-5 fw-bold text-center text-light ">Enroll Type</p></div>
                <div className="row rounded-bottom  p-3 border  ">
                <div class="accordion" id="accordionEnrollType">
                <div class="accordion gap-3" id="accordionPanelsStayOpenStudent">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button border " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Student Enroll
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                        <div class="d-grid gap-2 mb-2">
                            <button class="btn btn-success border border-success-subtle" type="button">Individual Enroll</button>
                        </div>

                        <div class="dropdown">

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button bg-succe border collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Batch Enroll
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            <div class="d-grid gap-2">
                                <button class="btn btn-success  border border-success-subtle" type="button">Incoming Students</button>
                                <button class="btn btn-success " type="button">New School Year</button>
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
                        <div class="d-grid gap-2 mb-2">
                            <button class="btn btn-success border border-success-subtle" type="button">Individual Enroll</button>
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
        </div>
    )
}
export default EnrollModifier