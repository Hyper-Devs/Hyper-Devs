import api from '../../api/api'
import React, { useState,useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import jwt_decode from 'jwt-decode';
import GlobalModal from '../Modal/globalmodal';
import './OvrContainer.css';
import 'react-datepicker/dist/react-datepicker.css'


function OvrContainer() {
  const [isVisible, setIsVisible] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [attendanceLog, setAttendanceLog] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null); // New state variable

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [bodyModal, setBodyModal] = useState('');

  const fetchStudent = async (id) => {
    setResultData(null);
    try {
      const response = await api.get(`/database/student/${id}`);
      console.log([response.data])
      if ([response.data].length > 0 && response.data != "No data found") {
        setResultData([response.data][0]);
        setAttendanceLog(response.data); // Set the attendance log data
      }
      else { setResultData('empty'); }
    } catch (err) {
      console.log(err);
    }
  };
  
  const handleRowEdit = (row) => {
    setSelectedRow(row);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    fetchStudent(formJson['input-field']);
  }

  async function handleSubmitOverride(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const currentDate = new Date();
    const currentDay = currentDate.getDate().toString();
    const currentMonth = (currentDate.getMonth()+1).toString();
    const currentYear = currentDate.getFullYear().toString();
    const token = localStorage.getItem("accessToken");
    const decodedToken = jwt_decode(token);
    const userName = decodedToken.name;

    formJson["student_rfid"]=resultData.rfid
    formJson["overrider_name"]=userName
    formJson["overriding_date"]=currentYear + "-" + currentMonth+ "-"+ currentDay   
    
    console.log(formJson)
    await addOverrideLog(formJson)
    await updateAttendanceLog({"rfid": selectedRow.rfid})
  };

  const addOverrideLog = async (overrideLog) => {
    try{
      const result = await api.post(`/override/new-override-log`, overrideLog);
      if (result.status === 210){
        setTitleModal("Override success");
        setBodyModal(result.data)
        setShowModal(true)
      }
      else{
          setTitleModal("Override unsuccessful");
          setBodyModal(result.data);
          setShowModal(true);
      }
    } catch (error) {
      setTitleModal("Internal Error");
      setBodyModal("An error occured. Refresh the page");
      setShowModal(true);
    }
  };

  const updateAttendanceLog = async (attendanceLog) => {
    try {
      const response = await api.put(`/override/update/attendance-log`, attendanceLog);
      if (response.status === 210){
        console.log("success!")
          // setTitleModal("Atten success");
          // setBodyModal("The selected student/s have been successfully enrolled to the next level.");
          // setShowModal(true);
      }
      else{
           console.log("error")
          // setTitleModal("Error");
          // setBodyModal("An error occured. Try again");
          // setShowModal(true);
      }
    } catch (err) {
        console.log(err)
        // setTitleModal("Request processed unsuccessfully");
        // setBodyModal("An error occurred")
        // setShowModal(true)
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  function displaySearchResults(){
    return (
      <div className='search-result'>
        <h2 style={{ color: '#00573F', fontFamily: 'Cambria', fontWeight: 900 }}>
          <b>STUDENT LOG INFORMATION</b>
        </h2>
        <div className="table-responsive">
          <table className='table border border-success rounded'>
            <thead className='table-success '>
              <tr>
                <th>RFID #</th>
                <th>Name</th>
                <th>Grade Level</th>
                <th>Section</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr key={resultData.rfid}>
                <td>{resultData.rfid}</td>
                <td>{resultData.first_name} {resultData.last_name}</td>
                <td>{resultData.grade_level}</td>
                <td>{resultData.section_name}</td>
                {/* <td>{resultData.time_out}</td>
                <td>{resultData.date}</td> */}
                <td>
                  <button id='action-icon' data-bs-toggle='modal' data-bs-target='#ovrModal' onClick={() => handleRowEdit(resultData)} >
                    <EditIcon />
                  </button>
                </td>
              </tr>
              {/* {attendanceLog.map((log) => (
                <tr key={log.id}>
                  <td>{log.rfid}</td>
                  <td>{log.time_in}</td>
                  <td>{log.time_out}</td>
                  <td>{log.date}</td>
                  <td>
                    <button id='action-icon' data-bs-toggle='modal' data-bs-target='#ovrModal' onClick={() => handleRowEdit(log)} >
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  useEffect(() => {
    console.log(resultData)
    setIsVisible(resultData !== null);
  },[resultData])



  return (
    <div className='ovr-container'>
      <div className='container-md mt-3'>
        <div className='search-content-container'>
          <p>Excuse a student</p>
          <div className='search-content'>
            <form className='search-field' onSubmit={handleSubmit}>
              <input
                name='input-field'
                type='text'
                className='form-control'
                placeholder='Enter student ID'
                required
              />
               <button type='submit' className='search-button'>Search</button>
            </form>
          </div>
        </div>
        {
          (resultData == 'empty') ? <p>No data available</p> :
          (resultData && isVisible) ? displaySearchResults() :
          <p></p>
        }
      </div>
      {resultData && isVisible && (
        <div className='modal fade' id='ovrModal' tabindex='-1' aria-labelledby='ovrModalLabel' aria-hidden='true'>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header bg-success'>
                <div className='col'>
                  <h1 className='modal-title fs-5 text-light' id='ovrModalLabel'>
                    Override Log
                  </h1>
                </div>
                <div className='col-1'>
                  <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                </div>
              </div>
              <div className='modal-body'>
                <div className='row p-3 border rounded'>
                  <div className='row px-3'>
                    <h3 className='text-center fw-bold text-secondary'>Student Log Information</h3>
                  </div>
                  <div className='row px-5  '>
                    <div className='col-4'>
                      <p>RFID: </p>
                      <p>Name: </p>
                      <p>Grade & Section: </p>
                    </div>
                    <div className='col mb-2'>
                      <p>{resultData.rfid}</p>
                      <p>{resultData.first_name} {resultData.last_name}</p>
                      <p>{resultData.grade_level} - {resultData.section_name}</p>
                    </div>
                  </div>
                  {/* <div className='row px-5'>
                    <h6 className='text-start fw-bold '>Student Log</h6>
                  </div> */}
                  {/* <div className='row px-5'>
                    {selectedRow && (
                      <>
                        <div className='col-4'>
                          <p>Date:</p>
                          <p>Time-in: </p>
                          <p>Time-out: </p>
                        </div>
                        <div className='col'>
                          <p>{selectedRow.date}</p>
                          <p>{selectedRow.time_in}</p>
                          <p>{selectedRow.time_out}</p>
                        </div>
                      </>
                    )}
                  </div> */}

                  <div className='row px-5'>
                    <button
                      className='btn mt-3 mb-3 btn-secondary'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#ovrCollapse'
                      aria-expanded='false'
                      aria-controls='ovrCollapse'
                    >
                      <p className='fs-6'>Override Student Attendance</p>
                    </button>
                    <div className='collapse' id='ovrCollapse'>
                      <div className='card card-body'>
                        <form onSubmit={handleSubmitOverride}>
                        <div className='row'>
                          <div className='input-group mb-1'>
                            <span className='input-group-text' id='ovrReason'>
                              Reason
                            </span>
                            <input
                              name='override-reason'
                              type='text'
                              className='form-control'
                              placeholder='Input reason here'
                              aria-label='Reason'
                              aria-describedby='ovrReason'
                            ></input>
                          </div>
                        </div>
                        <div className='row px-3'>
                          <button type='submit' className='btn btn-sm btn-success'>
                            <p className='fs-6'>Override</p>
                          </button>
                        </div>
                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='modal-footer align-end'>
                  <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                    Close
                  </button>
              </div>
            </div>
          </div>
        </div>
      )}
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

export default OvrContainer;
