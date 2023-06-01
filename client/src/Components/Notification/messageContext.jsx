import React, { useState, useEffect } from 'react'
import "./messageContext.css";
import Footer from '../footer'
import {AiOutlineLeft} from 'react-icons/ai'
import GlobalModal from '../Modal/globalmodal';

function MessageContext(props) {
  const titleModal = 'Notification Page'
  const bodyModal = 'Message content has been succesfully updated!'
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

    const handleCloseModal = () => {
      setShowModal(false);
    };

    const initialContent = localStorage.getItem('content') || 'Greetings! Mr./Ms. [Last Name], your child ["enter"/"exit"]\nthe school campus today [MM/DD/YYYY] at [00:00:00].\n\nAlso, [important school announcements can be added in this part of the message].\n\nThank you so much!\n\nThis is an auto-generated text message from [Name of School].';
    const[content, setContent] = useState(initialContent);
    
    useEffect(() => {
      // Save the current content to local storage
      localStorage.setItem('content', content);
    }, [content]);

    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  

    const handleClick = (buttonId, e) => {
        e.preventDefault();
        // Save the updated content to local storage
        localStorage.setItem('content', content);
        if (buttonId == 'update'){
          setShowModal(true)
        } else {
          props.onButtonClick(buttonId);
        }
    };

    // const recipient = '9761013401'; // example recipient phone number
    // const messageContent = localStorage.getItem('content'); // retrieve content from localStorage

    // fetch('/message', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ recipient: recipient, content: messageContent })
    // })
    // .then(response => {
    //   if (response.ok) {
    //     console.log('Message sent successfully!');
    //   } else {
    //     console.error('Message failed to send:', response.statusText);
    //   }
    // })
    // .catch(error => {
    //   console.error('Error sending message:', error);
    // });

  return (
    <div className="notif-message-box">
      <div className="notif-message-rectangle">
        <div className="notif-message-header">
        <p>Message Content</p>
        <button onClick={(e) => handleClick('notifBox', e)}><AiOutlineLeft size={"1.3rem"}/>Back</button>
        </div>
        <div className="notif-message-rectangle2">
          <div className="notif-message-rectangle3">
                <p>Notification Format</p>
            <textarea
              className="notif-message-rectangle5"
              value={content}
              onChange={handleContentChange}
              />
            <div className="notif-update-button">
              <button onClick={(e) => handleClick('update', e)}>Update</button>
            </div>
          </div>
        </div>
      </div>
      <div>
      <GlobalModal
        showModal={showModal}
        title={titleModal}
        body={bodyModal}
        onClose={handleCloseModal}
      />
      </div>
    </div>
  );
}

export default MessageContext;