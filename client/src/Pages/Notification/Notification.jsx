import React, {useState} from "react";
import "./Notification.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NotificationBox from "../../Components/Notification/notificationBox";
import MessageContext from "../../Components/Notification/messageContext";
import PageTitle from "../../Components/PageTitle";

function Notification() {
  const [active, setActive] = useState("notifBox");

  const handleButtonClick = (buttonId) => {
    setActive(buttonId)
  };

  return (
    <div className="notification-container">
      <div className="notification-content">
        <PageTitle pageName={"Notification"}/>
        {active == "notifBox" && <NotificationBox onButtonClick={handleButtonClick} />}
        {active === "msgContext" && <MessageContext onButtonClick={handleButtonClick} />}
      </div>
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
  );
}

export default Notification;
