import React from "react";
import "./Notification.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NotifContainer from "../../Components/Notification/notificationBox";
import PageTitle from "../../Components/PageTitle";

function Notification() {
  return (
    <div className="notification-container">
      <div className="notification-content">
        <PageTitle pageName={"Notification"}/>
        <NotifContainer/>
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
