// import "./Enroll.css"
import EnrollModifier from "../../Components/Enroll/Enroll-Modifier"
import Header2 from "../../Components/Database/Header/Header2"
import Footer1 from "../../Components/footer"
import SideNavBar from "../../Components/Sidebar/Sidebar"
import EnrollIndResult from "../../Components/Enroll/Enroll-Ind-Results"
import EnrollResults from "../../Components/Enroll/Enroll-Results"
import EnrollBNewSYResults from "../../Components/Enroll/Enroll-BNewSY-Results"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import EnrollModifier1 from "../../Components/Enroll/Enroll-Modifier1"

function Enroll(){
    return(
        <div>
            <div>
                <Header2/>
                {/* <EnrollModifier1/>
                <EnrollIndResult/> */}
                </div>

                <div class="container-fluid ">
                    <div class="row">
                        <div class="col-4">
                            <EnrollModifier1/>
                        </div>
                        <div class="col-8">
                            <EnrollBNewSYResults/>
                            {/* <EnrollIndResult/> */}
                        </div>
                    </div>
                </div>
                <Footer1/>
            </div>
            

    )
}
export default Enroll
