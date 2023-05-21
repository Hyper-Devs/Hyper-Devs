import React, { useState } from "react";
import axios from 'axios';
import GlobalModal from "../Modal/globalmodal";

function BSNewSResults() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [titleModal, setTitleModal] = useState('');
  const [bodyModal, setBodyModal] = useState('');
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

  const [enrollmentStatus, setEnrollmentStatus] = useState(''); // State to track enrollment success
  const [enrollmentError, setEnrollmentError] = useState(false); // State to track enrollment error

  function handleFileInputChange(event) {
    if (event.target.files[0]){
      setIsLoading(false);
      setFile(event.target.files[0]);
    }
    else
      setIsLoading(true)
  }

  function handleFileUpload(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('csv', file);

    addStudents(formData);
  }

  const addStudents = async (batchFile) => {
    setIsLoading(true);

    // Simulating server processing time
    setTimeout(() => {
      setIsLoading(false);
      // Handle the server response here
    }, 2000); // Assuming 2 seconds for processing

    try {
      const result = await axios.post(`http://localhost:8800/enroll/batch/new-student`, batchFile, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if ([210,220].includes(result.status)){
        setTitleModal("Request processed successfully");
      }
      else if ([400,410,420].includes(result.status)){
        setTitleModal("Request processed unsuccessfully");
      }
      else {
        setTitleModal("Error");
      }
      setBodyModal(result.data)
      setShowModal(true);   

    } catch (error) {
      if ([400,410,420].includes(error.response['status'])){
        setTitleModal("Request processed unsuccessfully");
        setBodyModal(error.response['data'])
      }
      else{
        setTitleModal("Error")
        setBodyModal("An error occurred")
      }
      setShowModal(true);
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
                  <button type="submit" disabled={isLoading} className="btn btn-success">Enroll</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <GlobalModal
          showModal={showModal}
          title={titleModal}
          body={bodyModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default BSNewSResults;
