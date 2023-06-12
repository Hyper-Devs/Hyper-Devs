import React from "react";
import "./Notification.css";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MessageContext from "../../Components/Notification/messageContext";
import Footer from '../../Components/footer'
import Header2 from "../../Components/Database/Header/Header2";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import NotificationBox from "../../Components/Notification/notificationBox";
// import PageTitle from "../../Components/PageTitle";

function Notification() {
  /*
  const [active, setActive] = useState("notifBox");

  const handleButtonClick = (buttonId) => {
    setActive(buttonId)
  };
  */

  return (
    <div className="notification-container">
      <Sidebar/>
      <div className="notification-content-container">
      <div className="notification-content">
        <Header2/>
        <div className="container-md">
            <div className="row ps-3 pt-3 pe-3">
              <div className="header-bg ps-4 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <h1 className="text-center fw-bold text-light">Notification Page</h1>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#helpCollapseDB" aria-expanded="false" aria-controls="helpCollapseDB"> 
                    <HelpOutlineIcon className="help-icon" /> 
                  </button>
                </div>
              </div>

              <div className="collapse bg-secondary bg-opacity-25 border border-bottom-0 border-dark p-3" id="helpCollapseDB">
                <div className="card card-body border border-dark">
                  This page directs you to the message content. The contents below is the format that the system follows when sending to parents. The user can edit this for their benefit. Also, access to this page is limited to the admin only. 
                </div>
              </div>

              <div className="row bg-warning rounded-bottom ps-3 mx-0 mb-0 border border-dark">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item text-dark">
                      <Link className='text-light' to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active text-dark" aria-current="page">
                      Notification
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        <MessageContext/>
        </div>
        <Footer /> 
      </div>
    </div>
  );
}

export default Notification;
