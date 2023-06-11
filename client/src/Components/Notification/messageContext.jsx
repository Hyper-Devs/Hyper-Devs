import React, { useState, useEffect } from 'react'
import "./messageContext.css";
import GlobalModal from '../Modal/globalmodal';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Popover from '@mui/material/Popover';


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

    const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
    const isPopoverOpen = Boolean(popoverAnchorEl);
  
    const handlePopoverOpen = (event) => {
      setPopoverAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setPopoverAnchorEl(null);
    };


  return (
    <div className="notif-message-box">
      <div className="notif-message-rectangle">
        <div className="notif-message-header">
          <p>Notification Message</p>
          <span className="icon-wrapper">
            <HelpOutlineIcon className="helpIcon" type="button" onClick={handlePopoverOpen} />
          </span>
        </div>
        <Popover
            open={isPopoverOpen}
            anchorEl={popoverAnchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
            vertical: 'bottom',
            // horizontal: 'center',
            }}
            transformOrigin={{
            // vertical: 'bottom',
            horizontal: 'left',
            }}
            classes={{
                paper: 'custom-popover'
            }}
        >
            {/* Content of the popover */}
            <div className='row ms-3 p-1' >
                <div className="row p-3 border border-success rounded bg-success bg-opacity-25">
                    <h6 className='text-center fw-bold'>Notification Page Usage Help</h6>
                    <ul>
                        <li>(1) Modify the text inside the box and submit to change the notification message</li>
                        <li>(2) Only announcements are allowed to be changed in the auto-generated message.</li>
                    </ul>
                </div>
            
            </div>
        </Popover>
        <div className="notif-message-rectangle2">
          <div className="notif-message-rectangle3">
                <p>Announcements</p>
            <textarea
              className="notif-message-rectangle5"
              value={content}
              onChange={handleContentChange}
              />
            <div className="notif-update-button">
              <button onClick={(e) => handleClick('update', e)}>Submit</button>
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