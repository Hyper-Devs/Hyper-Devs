import './OvrContainer.css';
import React, { useRef, useState } from 'react';
import InputField from './SearchField';
import  Footer from '../footer';
import axios from 'axios';

function Box() {
    const [students,setStudents] = useState([])
    const fetchStudent = async (id) => {
        setStudents([]);
        try {
            const res = await axios.get(`http://localhost:8800/students/${id}`);
            if (res.data.length > 0){
                setStudents(res.data)
            }
        } catch (err) {
            console.log(err);
        }
    };

    const nameForm = useRef(null);
    const handleClickEvent = () => {
        const form = nameForm.current;
        fetchStudent(form['student-id'].value);
        setIsVisible(true);
    }

    const [isVisible, setIsVisible] = useState(false);
    // const toggleVisibility = () => {setIsVisible(!isVisible);};

    return (
        <div className='container'>
            <div className='first-container'> 
                <p style={{padding: 15}}>Excuse a student</p>
                <div className='search-content'>
                    <form 
                        className='search-field' 
                        ref={nameForm}
                    >
                        <InputField name={'student-id'}/>
                    </form>

                    <button onClick={handleClickEvent}>Search</button>     
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

export default Box;