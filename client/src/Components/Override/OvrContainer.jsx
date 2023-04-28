import './OvrContainer.css';
import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../../Components/footer'

function OvrContainer() {
    const [students,setStudents] = useState([])
    const [isVisible, setIsVisible] = useState(false);

    const fetchStudent = async (id) => {
        setStudents([]);
        try {
            const res = await axios.get(`http://localhost:8800/override/${id}`);
            if (res.data.length > 0){
                setStudents(res.data)
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
        setIsVisible(true);
    }
    
    return (
        <div className='container'>
            <div className='first-container'> 
                <p>Excuse a student</p>
                <div className='search-content'>
                    <form className='search-field' onSubmit={handleSubmit}>
                        <div className='search-bar'>
                            <input 
                                name='input-field'
                                type="text" 
                                class="form-control"
                                placeholder='Enter student ID'
                                required
                            />
                        </div>
                        <button type='submit'>Search</button>
                    </form>
                </div>
            </div>
            {(students.length > 0) && isVisible &&          
                <div className='search-result'>
                    <h2 style={{color: '#00573F', margin: 10, fontFamily: "Playfair Display", fontWeight: 900}}><b>STUDENT INFORMATION</b></h2>
                    <div className='student-details'>
                        <div className='name-id-block'>
                            <div className="name">Name: {students[0].first_name}</div>
                            <div className="id">ID no.: {students[0].id}</div>
                        </div>
                        <div className='addtl-info-block'>
                            <div className="sex">Sex: {students[0].sex}</div>
                            <div className="age">Age: {students[0].age}</div>
                            <div className="gradeLevel">Grade Level: {students[0].grade_level}</div>
                            <div className="section">Section: {students[0].section}</div>
                        </div>
                        <div className='input-fields-block'>
                            <h1>Reason:</h1>
                            <input className='reason-input'/>
                            <h1>Overriding Admin</h1>
                            <input className='reason-input ovrAdmin-input'/>
                            
                        </div>
                        <button style={{height: 40, }}>Override</button>
                    </div>
                </div>
            }
            {(students.length <= 0) && isVisible &&
                <div className='search-result'>
                    <h2>Student does not exist</h2>
                </div>
            }  
            <Footer/>
      </div>
    )
}

export default OvrContainer;