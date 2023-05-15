import {React, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function EnrollModifier1({onEnrollTypeChange}){

    // const handleClick = (buttonId) => {
    //     return buttonId;
    // };

    const individualEnroll = () => {
        onEnrollTypeChange('enrollIR');
    };
    const batchNS = () => {
        onEnrollTypeChange('enrollBSNSR');
    };
    const batchNY = () => {
        onEnrollTypeChange('enrollBNSYR');
    };
    

    return(
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col bg-secondary bg-opacity-25 p-3 rounded border border-success">
                <div className="accordion mb-3" id="accordionPanelsStayOpenEnrollOptions">
                    <div className="accordion-item bg-secondary bg-opacity-10 border border-success">
                        <h2 className="accordion-header">
                        <button className="accordion-button bg-success text-light" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseStudentOption" aria-expanded="true" aria-controls="panelsStayOpen-collapseStudentOption">
                        Enroll Option
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseStudentOption" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <div className="d-grid gap-1 mb-2">
                                <button className="btn btn-secondary btn-outline-success text-light borders " type="button" onClick={individualEnroll}>Individual Enroll</button>
                            </div>
                            <div className="accordion-item bg-secondary bg-opacity-10 border border-success rounded">
                                <h2 className="accordion-header">
                                <button className="accordion-button bg-success text-light  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseStudentBatchOption" aria-expanded="false" aria-controls="panelsStayOpen-collapseStudentBatchOption">
                                    Batch Enroll
                                </button>
                                </h2>
                                <div id="panelsStayOpen-collapseStudentBatchOption" className="accordion-collapse collapse">
                                    <div className="accordion-body">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-secondary btn-outline-success text-light borders " type="button" onClick={batchNS}>New Students</button>
                                            <button className="btn btn-secondary btn-outline-success text-light borders " type="button" onClick={batchNY}>New School Year</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <div class="accordion" id="accordionPanelsStayOpenEnrollSettings">
                    <div class="accordion-item bg-secondary bg-opacity-10 border border-success ">
                        <h2 class="accordion-header">
                        <button class="accordion-button bg-success text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Admin Configurations
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            <div class="d-grid gap-2 mb-2">
                                    <button class="btn btn-secondary btn-outline-success text-light border " type="button">Add a Section</button>
                                    <button class="btn btn-secondary btn-outline-success text-light border " type="button">Delete a Section</button>
                                    <button class="btn btn-secondary btn-outline-success text-light border " type="button">Delete a Student</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> */}
            </div>
        </div>
        </div>
    )
}
export default EnrollModifier1