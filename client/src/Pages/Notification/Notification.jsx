import React, {useState} from "react";
import "./Notification.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NotificationBox from "../../Components/Notification/notificationBox";
import MessageContext from "../../Components/Notification/messageContext";
import PageTitle from "../../Components/PageTitle";
import Footer from '../../Components/footer'
import Header2 from "../../Components/Database/Header/Header2";
function Notification() {
  const [active, setActive] = useState("notifBox");

  const handleButtonClick = (buttonId) => {
    setActive(buttonId)
  };

  return (
    <div className="notification-container">
      <Sidebar/>
      <div className="notification-content-container">
      <div className="notification-content">
        <Header2/>
        {/* <PageTitle pageName={"Notification"}/> */}
        
        {active == "notifBox" && <NotificationBox onButtonClick={handleButtonClick} />}
        {active === "msgContext" && <MessageContext onButtonClick={handleButtonClick} />}
        
        </div>
        <Footer /> 
      </div>
    </div>
  );
}

export default Notification;
