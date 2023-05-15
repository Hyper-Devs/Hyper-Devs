import "./Header2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {BsPerson} from 'react-icons/bs'
import {IoPersonCircleSharp} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineLeft} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


function Header2(){

    const handleLogoutClick = () => {
        localStorage.clear()
        window.location.replace("/")
    }

    return(
        <div className="header2-container">
            <div className="title-container">UPHS Gate Access Notification System</div>
                <div className="btn-group">
                    <button className="btn btn-light dropdown-toggle" type="button" aria-label="Dropdown-Menu" data-bs-toggle="dropdown" aria-expanded="false">
                    <BsPerson size="30px"/>
                    </button>
                    <ul className="dropdown-menu" data-testid="dropdown-menu">
                        <li><div className="profile-name" data-testid="profile-button"><IoPersonCircleSharp className="IoPersonCircleSharp" size={"22px"}/>Noreen M.</div></li>
                        <li><button className="dropdown-item" type="button" aria-label="account-setting"><AiOutlineLeft className="AiOutlineLeft"/>Account Settings</button></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><button className="dropdown-item" type="button" onClick={handleLogoutClick} aria-label="ddLogoutButton"><FiLogOut className="FiLogOut"/>Logout</button></li>
                    </ul>
                </div>
        </div>
    )
}
export default Header2