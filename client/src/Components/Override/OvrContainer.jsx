import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import './OvrContainer.css';
import EditIcon from '@mui/icons-material/Edit';
import jwt_decode from 'jwt-decode';
import api from "../../api/api"
import OverridingModal from '../Modal/overridingModal';

function OvrContainer() {
  const [students, setStudents] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('isLoggedin'))[0]['name'];
  const [resultData, setResultData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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

    formJson["id"] = resultData.id
    formJson["student_name"] = resultData.student_name
    formJson["student_id"] = resultData.rfid
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
  setIsFieldVisible(resultData !== null);
}, [attendanceLog]);


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
            
          </div>
        )}
      </div>
      {isFieldVisible && (
        <OverridingModal
        attendanceLog={attendanceLog}
        handleSubmitOverride={handleSubmitOverride}
        />
      )}
    </div>
  );
}

export default OvrContainer;
