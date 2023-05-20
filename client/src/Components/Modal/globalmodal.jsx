import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function GlobalModal({ showModal, title, body, onClose, showRetry, onSaveChanges, onRetry }) {
  const handleClose = () => {
    onClose();
  };

  const handleSaveChanges = () => {
    onSaveChanges();
  };

  const handleRetry = () => {
    onRetry();
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header bg-success ">
            <h1 className="modal-title fs-4 text-center">{title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            {showRetry ? (
              <button type="button" className="btn btn-success" onClick={handleRetry}>Retry</button>
            ) : (
              <button type="button" className="btn btn-success" onClick={handleSaveChanges}>Save changes</button>
            )}
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalModal;
