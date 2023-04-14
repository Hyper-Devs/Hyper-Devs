// import "./Enroll.css"
import EnrollModifier from "../../Components/Enroll/Enroll-Modifier"
import Header2 from "../../Components/Database/Header/Header2"
import Footer1 from "../../Components/footer"
import SideNavBar from "../../Components/Sidebar/Sidebar"
import EnrollIndResult from "../../Components/Enroll/Enroll-Ind-Results"
import EnrollResults from "../../Components/Enroll/Enroll-Results"
import EnrollBNewSYResults from "../../Components/Enroll/Enroll-BNewSY-Results"

import Sidebar from '../../Components/Sidebar/Sidebar'

import EnrollModifier1 from "../../Components/Enroll/Enroll-Modifier1"
import BSNewSResults from "../../Components/Enroll/Enroll-BNewS-Results"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Enroll(){
    return(
        <div className="enroll-container">

            <div className="enroll-default">
                <Header2/>
                <div className="enroll-content">
                <div class="container-fluid">
                        <div class="row">
                            <div class="col-4">
                                <EnrollModifier1/>
                            </div>
                            <div class="col-8">
                                {/* <BSNewSResults/> */}
                                {/* <EnrollBNewSYResults/> */}
                                <EnrollIndResult/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Footer1/>
            </div>
            <div className="enroll-sidebar">
            <Sidebar
                buttonState={{
                    item1: false,
                    item2: false,
                    item3: true,
                    item4: false,
                    item5: false,
                }} />
            </div>      

                
            </div>
            

    )
}
export default Enroll
