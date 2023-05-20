import React, { useState } from "react";
import axios from 'axios';
import GlobalModal from "../Modal/globalmodal";

function BSNewSResults() {
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false); // State to track enrollment success
  const [enrollmentError, setEnrollmentError] = useState(false); // State to track enrollment error

  function handleFileInputChange(event) {
    setFile(event.target.files[0]);
  }

  function handleFileUpload(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('csv', file);

    addStudents(formData);
  }

  const addStudents = async (batchFile) => {
    try {
      const result = await axios.post(`http://localhost:8800/enroll/batch/new-student`, batchFile, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(result.data);
      setEnrollmentSuccess(true); // Set enrollment success to true
      setShowModal(true); // Show the modal after successful enrollment
    } catch (error) {
      console.log(error.response);
      setEnrollmentError(true); // Set enrollment error to true
      setShowModal(true); // Show the modal after enrollment error
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRetry = () => {
    setEnrollmentError(false);
    setShowModal(false);
  };

  return (
    <div className="container-fluid p-3">
      <div className="row">
        <div className="col">
          <div className="row border border-success bg-secondary bg-opacity-25 rounded p-5">
            <div className="row p-3 mb-2 border border-success rounded">
              <label htmlFor="SInfo" className="form-label text-center text-success">UPLOAD STUDENT INFORMATION</label>
              <form onSubmit={handleFileUpload}>
                <div className="input-group">
                  <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                  <input
                    onChange={handleFileInputChange}
                    type="file"
                    name="batch-enroll-file"
                    className="form-control bg-success bg-opacity-50"
                    id="inputGroupFile01"
                    accept="application/csv,text/csv"
                  />
                  <button type="submit" className="btn btn-success">Enroll Student</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <GlobalModal
          showModal={showModal}
          title={enrollmentSuccess ? "New Students Batch Enroll" : "Enrollment Error"}
          body={enrollmentSuccess ? "Enrollment successful!" : "Enrollment failed. Please try again."}
          onClose={handleCloseModal}
          showRetry={!enrollmentSuccess && enrollmentError} // Show "Retry" button only when there is an enrollment error
          onSaveChanges={handleRetry} // Retry enrollment when "Save changes" button is clicked
          onRetry={handleRetry} // Retry enrollment when "Retry" button is clicked
        />
      )}
    </div>
  );
}

export default BSNewSResults;
