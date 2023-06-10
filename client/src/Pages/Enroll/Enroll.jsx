import "./Enroll.css"
import React, {useState} from "react";
import { Link } from "react-router-dom";
// import EnrollModifier from "../../Components/Enroll/Enroll-Modifier"
import Header2 from "../../Components/Database/Header/Header2"
import Footer1 from "../../Components/footer"
import Sidebar from '../../Components/Sidebar/Sidebar'
import GlobalModal from "../../Components/Modal/globalmodal";
import EnrollIndResult from "../../Components/Enroll/Enroll-Ind-Results"
import EnrollBNewSYResults from "../../Components/Enroll/Enroll-BNewSY-Results"
import EnrollModifier1 from "../../Components/Enroll/Enroll-Modifier1"
import BSNewSResults from "../../Components/Enroll/Enroll-BNewS-Results"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Enroll(){
    const [active, setActive] = useState('enrollIR');

    const handleEnrollmentOption = (type) => {
        setActive(type)
    };

    return(
        <div className="enroll-container" data-testid='enroll-container'>

            <div className="enroll-default">
                <Header2/>
            <div className="container-md">
                <div className="row ps-3 pt-3 pe-3">
                <div className="header-bg ps-4 d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                    <h1 className="text-center fw-bold text-light">Enrollment Page</h1>
                    </div>
                    <div className="d-flex align-items-center">
                    <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#helpCollapseDB" aria-expanded="false" aria-controls="helpCollapseDB"> 
                        <HelpOutlineIcon className="help-icon" /> 
                    </button>
                    </div>
                </div>

                <div className="collapse bg-danger bg-opacity-25 border border-bottom-0 border-dark p-3" id="helpCollapseDB">
                    <div className="card card-body border border-dark">
                    This page enrolls students into the system. There are options for varied enrollment types. Students can be enrolled individually, or by batch and even only updating the grade level and section for a new school year. More specified edits on exisiting information can be accessed through Database. 
                    </div>
                </div>

                <div className="row bg-warning rounded-bottom ps-3 mx-0 mb-0 border border-dark">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item text-dark">
                        <Link className='text-light' to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active text-dark" aria-current="page">
                        Enroll
                        </li>
                    </ol>
                    </nav>
                </div>
                </div>
          </div>
                <div className="enroll-content">
                <div className="container-md">
                        <div className="row ">
                            <div className="col-4">
                                <EnrollModifier1 onEnrollTypeChange={handleEnrollmentOption}/>
                                <GlobalModal/>
                                
                            </div>
                            <div className="col-8">
                            {active === "enrollIR" && <EnrollIndResult/>}
                            {active === "enrollBSNSR" && <BSNewSResults/>}
                            {active === "enrollBNSYR" && <EnrollBNewSYResults/>}
                                {/* <BSNewSResults/> */}
                                {/* <EnrollBNewSYResults/> */}
                                {/* <EnrollIndResult/> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Footer1/>
            </div>
            <Sidebar/>
            </div>
            

    )
}
export default Enroll
