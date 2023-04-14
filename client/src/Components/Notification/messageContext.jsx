import React, { useState } from 'react'
import "./messageContext.css";
import Footer from '../../Components/footer'
import {AiOutlineLeft} from 'react-icons/ai'

function messageContext(props) {
    const handleClick = (buttonId) => {
        props.onButtonClick(buttonId);
    };
  return (
    <div className="notif-message-box">
      <div className="notif-message-rectangle">
        <div className="notif-message-header">
        <p>Context Message</p>
        <button onClick={() => handleClick('notifBox')}><AiOutlineLeft/></button>
        </div>
        <div className="notif-message-rectangle2">
          <div className="notif-message-rectangle3">
            <div className="notif-message-rectangle4">
                <p>Notification Format</p>
            <div className="notif-message-rectangle5"><p>Greetings! Mr./Ms. [Last Name], your child ["enter"/"exit"]
                <br/>the school campus toady [MM/DD/YYY] at [00:00:00].
                <br/>
                <br/>Also, [important school announcements can be added in this part of the message].
                <br/>
                <br/>Thank you so much!
                <br/>
                <br/>This is an auto-generated text message from [Name of School].</p></div>
            <div className="notif-update-button">
              <button>Update</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default messageContext;