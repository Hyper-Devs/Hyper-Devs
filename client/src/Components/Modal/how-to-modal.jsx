import './how-to-modal.css';

import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function GlobalModal({ showModal, title, body, onClose, showRetry, onSaveChanges, onRetry }) {
  const handleClose = () => {
    onClose();
  };

  const handleSaveChanges = () => {
    // Handle the save changes action
    console.log('Save changes');
  };

  const handleRetry = () => {
    onRetry();
  };

  const modalRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      modalRef.current.focus();
    }
  }, [showModal]);

  return (
    <div>
      {showModal && <div className="modal-overlay"></div>}
      <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog-lg modal-dialog-centered" ref={modalRef}>
          <div className="modal-content">
            <div className="modal-header bg-success ">
              <h1 className="modal-title fs-4 text-center text-light">{title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              {body}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalModal;
