import React from "react";
import "./Notification.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MessageContext from "../../Components/Notification/messageContext";
import Footer from '../../Components/footer'
import Header2 from "../../Components/Database/Header/Header2";
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
        <div className="page-title"><p>Notification Page</p></div>
        <MessageContext/>
  {/*
        {active == "notifBox" && <NotificationBox onButtonClick={handleButtonClick} />}
        {active === "msgContext" && <MessageContext onButtonClick={handleButtonClick} />}
  */}

        </div>
        <Footer /> 
      </div>
    </div>
  );
}

export default Notification;
