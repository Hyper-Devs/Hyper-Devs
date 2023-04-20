import "./Header2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {BsPerson} from 'react-icons/bs'
import {IoPersonCircleSharp} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineLeft} from 'react-icons/ai'


function Header2(){
    return(
        <div className="header2-container">
            <div className="title-container">UPHS Gate Access Notification System</div>
                <div class="btn-group">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <BsPerson size="30px"/>
                    </button>
                    <ul class="dropdown-menu">
                        <li><div className="profile-name"><IoPersonCircleSharp className="IoPersonCircleSharp" size={"22px"}/>Noreen M.</div></li>
                        <li><button class="dropdown-item" type="button"><AiOutlineLeft className="AiOutlineLeft"/>Account Settings</button></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><button class="dropdown-item" type="button"><FiLogOut className="FiLogOut"/>Logout</button></li>
                    </ul>
                </div>
        </div>
    )
}
export default Header2