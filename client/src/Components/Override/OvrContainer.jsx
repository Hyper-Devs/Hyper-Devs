import axios from 'axios';
import React, { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import './OvrContainer.css';
import EditIcon from '@mui/icons-material/Edit';
import jwt_decode from 'jwt-decode';
import api from "../../api/api"
import OverridingModal from '../Modal/overridingModal';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function OvrContainer() {
  const [students, setStudents] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isFieldVisible, setIsFieldVisible] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('isLoggedin'))[0]['name'];
  const [resultData, setResultData] = useState(null);
  const [attendanceLog, setAttendanceLog] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const fetchStudent = async (id) => {
    setResultData(null);
    try {
      const response = await api.get(`/override/${id}`);
      if (response.data.length > 0) { setResultData(response.data); }
    } catch (err) { console.log(err); }
  };

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    fetchStudent(formJson['input-field']);
    setIsVisible(resultData !== null);
  }

  function handleSubmitOverride(event) {
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

    formJson["id"] = attendanceLog.id
    formJson["student_name"] = attendanceLog.student_name
    formJson["student_id"] = attendanceLog.rfid
    formJson["overrider_name"] = userName
    formJson["overriding_date"] = currentYear + "-" + currentMonth+ "-"+ currentDay   
    
    console.log(formJson) 
    
    // addOverrideLog(formJson)
  };

  // const addOverrideLog = async (overrideLog) => {
  //   setIsLoading(true);

  //   // Simulating server processing time
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     // Handle the server response here
  //   }, 2000); // Assuming 2 seconds for processing

  //   try {
  //       const result = await api.post(`/enroll/new-student`, studentInfo);
  //       if (result.status === 210){
  //           setTitleModal("Enrollment success");
  //           setBodyModal(result.data)
  //           setShowModal(true)
  //       }
  //       else{
  //           setTitleModal("Enrollment unsuccessful");
  //           setBodyModal(result.data);
  //           setShowModal(true);
  //       }

  //   } catch (error){
  //       setTitleModal("Internal Error");
  //       setBodyModal("An error occured. Refresh the page");
  //       setShowModal(true);
  //   }
  // };
  
  useEffect(() => {
    setIsVisible(resultData !== null);
  }, [resultData]);

  useEffect(() => {
    setIsFieldVisible(attendanceLog !== null);
  }, [attendanceLog]);

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
    <div className='modal fade' class="modal" id='ovrModal' tabindex='-1' aria-labelledby='ovrModalLabel' aria-hidden='true'>
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
                  <p>Name:</p>
                  <p>ID: </p>
                  <p>RFID: </p>
                </div>
                <div className='col mb-2'>
                  <p>{attendanceLog.student_name}</p>
                  <p>{attendanceLog.id}</p>
                  <p>{attendanceLog.rfid}</p>
                </div>
              </div>
              <div className='row px-5'>
                <h6 className='text-start fw-bold '>Student Log</h6>
              </div>
              <div className='row px-5'>
                <div className='col-4'>
                  <p>Date:</p>
                  <p>Time-in: </p>
                  <p>Time-out: </p>
                </div>
                <div className='col'>
                  <p>{attendanceLog.date}</p>
                  <p>{attendanceLog.time_in}</p>
                  <p>{attendanceLog.time_out}</p>
                </div>
              </div>
              <div className='row px-5'>
                <button
                  className='btn mt-3 mb-3 btn-secondary'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#ovrCollapse'
                  aria-expanded='false'
                  aria-controls='ovrCollapse'
                >
                  <p className='fs-6'>Override Student Log</p>
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

                    {/* <div className='row mx-2 px-3 mb-1 py-1 bg-secondary bg-opacity-25 rounded'>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      className='ovrSelectDate' 
                    />
                  </div>
                  <div className='row mx-2 px-3 mb-1 py-1 bg-secondary bg-opacity-25 rounded'>
                    <TimePicker
                      value={selectedTime}
                      onChange={(time) => setSelectedTime(time)}
                      className='ovrSelectTime' 
                    />
                  </div> */}


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-footer align-end'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'> Close </button>
              {/* <button type='button' className='btn btn-secondary'>
                Save changes
              </button> */}
          </div>
        </div>
      </div>
    </div>
    });
  }, [isFieldVisible]);


return (
    <div className='ovr-container'>
      <div className='ovr-content'>
        <div className='title-container'>
          <p>Override Page</p>
        </div>
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
        {resultData && isVisible && (
          <div className='search-result'>
            <h2 style={{ color: '#00573F', fontFamily: 'Cambria', fontWeight: 900 }}>
              <b>STUDENT LOG INFORMATION</b>
            </h2>
            <div className="table-responsive">
            <table className='table border border-success rounded'>
              <thead className='table-success '>
                <tr>
                  <th>Name</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                  <th>Date</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {resultData.map((log, index) => (
                  <tr key={index}>
                    <td>{log.student_name}</td>
                    <td>{log.time_in}</td>
                    <td>{log.time_out}</td>
                    <td>{log.date}</td>
                    <td>
                      <button id='action-icon' data-bs-toggle='modal' data-bs-target='#ovrModal' onClick={() => setAttendanceLog(log)}>
                        <EditIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OvrContainer;
