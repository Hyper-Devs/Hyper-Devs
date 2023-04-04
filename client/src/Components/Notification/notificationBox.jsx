import React, { useState } from 'react'
import "./notificationBox.css";
import Footer from '../../Components/footer'

function notificationBox(props) {
  const handleClick = (buttonId) => {
    props.onButtonClick(buttonId);
};
  return (
    <div className="notifBox">
      <div className="notif-rectangle">
        <p>Notification Access</p>
        <div className="notif-rectangle2">
          <div className="notif-rectangle3">
            <div className="notif-button-container">
              <button>Subscription Status</button>
            </div>
            <div className="notif-button-container">
              <button onClick={() => handleClick('msgContext')}>Message Context</button>
            </div>
          </div>
        </div>
      </div>
      <div className="notif-footer">
        <Footer />
      </div>
    </div>
  );
}

export default notificationBox;
