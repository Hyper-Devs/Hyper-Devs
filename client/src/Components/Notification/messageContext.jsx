import React, { useState, useEffect } from 'react'
import "./messageContext.css";
// import Footer from '../footer'
// import {AiOutlineLeft} from 'react-icons/ai'
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
        if (buttonId === 'update'){
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
    <div className="container-md">
      <div className="row p-5 ">
        <div className="row rounded rounded-top bg-success">
          <h3 className='text-center text-light fw-bold py-2'>Message Content</h3> 
        </div>
        <div className="row rounded-bottom px-5 py-2 border">
          <div class="row ms-0">
            <label for="textContent" class="form-label">
              <h5 className='text-success fw-bold '>Default Text Message:</h5>
              </label>
            <textarea defaultValue= "Good day, Mr./Mrs. []. This is to inform you that [student name][entered/exit] the school campus at [mm/dd/yyyy T 00:00:00]."
            class="form-control mb-3" id="textContent" rows="3"></textarea>
          </div>
          <div class="row ms-0">
            <label for="textAnnounceContent" class="form-label">
            <h5 className='text-success fw-bold '>Announcement Text Message:</h5>
            </label>
            <textarea defaultValue= "To announce, on [mm/dd/yy T 00:00:00], the school is conducting a [(enter school event)]."
            class="form-control mb-3" id="textAnnounceContent" rows="3"></textarea>
          </div>
          <button type="button" class="btn btn-success mb-3 ">Apply Changes to Text</button>
        </div>
      </div>
      {/* <div className="notif-message-rectangle">
        <div className="notif-message-header">
        <p>Notification Message</p>
        </div>
        <div className="notif-message-rectangle2">
          <div className="notif-message-rectangle3">
                <p>Message Format</p>
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
      </div> */}
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