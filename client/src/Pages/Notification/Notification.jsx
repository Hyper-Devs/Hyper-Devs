import React, {useState} from "react";
import "./Notification.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NotificationBox from "../../Components/Notification/notificationBox";
import MessageContext from "../../Components/Notification/messageContext";
import PageTitle from "../../Components/PageTitle";
import Footer from '../../Components/footer'

function Notification() {
  const [active, setActive] = useState("notifBox");

  const handleButtonClick = (buttonId) => {
    setActive(buttonId)
  };

  return (
    <div className="notification-container">
      <div className="notification-content-container">
      <div>
      <Sidebar
        buttonState = {{
        item1: false,
        item2: false,
        item3: false,
        item4: true,
        item5: false
        }}
      />
      </div>
      <div className="notification-content">
        <PageTitle pageName={"Notification"}/>
        <div className="notif-box-container">
        {active == "notifBox" && <NotificationBox onButtonClick={handleButtonClick} />}
        {active === "msgContext" && <MessageContext onButtonClick={handleButtonClick} />}
        </div>
        <Footer /> 
      </div>
      </div>
    </div>
  );
}

export default Notification;
