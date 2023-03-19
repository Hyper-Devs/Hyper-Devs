import React, { useState } from "react";
import "./Notification.css";
import Header from "../../Components/header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NotificationBox from "../../Components/Notification/notificationBox";

function Notification() {
  return (
    <div className="notification-container">
      <div className="notification-content">
        <div className="notification-title">Notification</div>
        <NotificationBox />
      </div>
      <Sidebar />
    </div>
  );
}

export default Notification;
