import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import './OvrContainer.css';
import EditIcon from '@mui/icons-material/Edit';

function OvrContainer() {
  const [students, setStudents] = useState([]);
  const [value, onChange] = useState('10:00');
  const [isVisible, setIsVisible] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('isLoggedin'))[0]['name'];
  const [resultData, setResultData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('10:00');

  const fetchStudent = async (id) => {
    setResultData(null);
    try {
      const response = await axios.get(`http://localhost:8800/override/${id}`);
      if (response.data.length > 0) {
        setResultData(response.data[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    fetchStudent(formJson['input-field']);
    setIsVisible(resultData !== null);
  }

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
              <button type='submit'>Search</button>
            </form>
          </div>
        </div>
        {resultData && isVisible && (
          <div className='search-result'>
            <h2 style={{ color: '#00573F', fontFamily: 'Cambria', fontWeight: 900 }}>
              <b>STUDENT INFORMATION</b>
            </h2>
            <table className='student-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                  <th>Date</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{resultData.student_name}</td>
                  <td>{resultData.time_in}</td>
                  <td>{resultData.time_out}</td>
                  <td>{resultData.date}</td>
                  <td>
                    <button id='action-icon' data-bs-toggle='modal' data-bs-target='#ovrModal'>
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
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
                      <p>Name:</p>
                      <p>ID: </p>
                      <p>RFID: </p>
                    </div>
                    <div className='col mb-2'>
                      <p>{resultData.student_name}</p>
                      <p>{resultData.id}</p>
                      <p>{resultData.rfid}</p>
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
                      <p>{resultData.date}</p>
                      <p>{resultData.time_in}</p>
                      <p>{resultData.time_out}</p>
                    </div>
                  </div>
                  <div className="row  px-5">
                  <button className="btn mt-3 mb-3 btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#ovrCollapse" aria-expanded="false" aria-controls="ovrCollapse">
                  <p className='fs-6'>Override Student Log</p>
                  </button>
                  <div className="collapse" id="ovrCollapse">
                    <div className="card card-body">
                      <div className="row">
                      <div className="input-group mb-1">
                        <span className="input-group-text" id="ovrReason">Reason</span>
                        <input type="text" className="form-control" placeholder="Input reason here" aria-label="Reason" aria-describedby="ovrReason"></input>
                      </div>
                      </div>
                      <div className="row">
                          <div className="col-2">
                            <span className="input-group-text" id="ovrDate">Time</span>
                          </div>
                          <div className="col">
                            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
                          </div>
                      </div>
                      <div className="row">
                      <div className="input-group mb-3">
                        <span className="input-group-text" id="ovrReason">Time</span>
                        <input type="text" className="form-control" placeholder="Input reason here" aria-label="Reason" aria-describedby="ovrReason"></input>
                      </div>
                      </div>
                      <div className="row px-3">
                      <button type="button" className='btn btn-sm btn-success'><p className='fs-6'>Override</p> </button>
                      </div>
                    </div>
                </div>
                  </div>
                </div>
              </div>
              <div className='modal-footer align-end'>
                <div className='col-3'>
                  <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                    Close
                  </button>
                </div>
                <div className='col-3'>
                  <button type='button' className='btn btn-secondary'>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OvrContainer;
