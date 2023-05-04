import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Modal({ title, body }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleNavigateToDashboard = () => {
    handleCloseModal();
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleOpenModal}>
        Launch demo modal
      </button>

      <div className={`modal fade ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-modal="true" style={{ display: `${showModal ? 'block' : 'none'}` }} data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {body}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" onClick={handleCloseModal}>Close</button>
              <Link to="/dashboard" className="btn btn-success" onClick={handleNavigateToDashboard}>Back to Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default Modal;
