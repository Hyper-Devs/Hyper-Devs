import "./Enroll.css"
import React, {useState} from "react";
// import EnrollModifier from "../../Components/Enroll/Enroll-Modifier"
import Header2 from "../../Components/Database/Header/Header2"
import Footer1 from "../../Components/footer"
import Sidebar from '../../Components/Sidebar/Sidebar'
import GlobalModal from "../../Components/Modal/globalmodal";
import EnrollIndResult from "../../Components/Enroll/Enroll-Ind-Results"
import EnrollBNewSYResults from "../../Components/Enroll/Enroll-BNewSY-Results"
import EnrollModifier1 from "../../Components/Enroll/Enroll-Modifier1"
import BSNewSResults from "../../Components/Enroll/Enroll-BNewS-Results"



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
                <div className="page-title"><p>Enrollment Page</p></div>
                <div className="enroll-content">
                <div className="container-fluid">
                        <div className="row">
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
