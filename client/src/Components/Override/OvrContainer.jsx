import './OvrContainer.css';
import React, { useRef, useState } from 'react';
import InputField from './SearchField';

function Box() {
    const nameForm = useRef(null);
    // const handleClickEvent = () => {
    //     const form = nameForm.current
    //     alert(`${form['firstname'].value}`)
    //      // this function is can be used to get info from the text field
    // }
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (
        <div className='container'>
            <div className='rectangle'>
                <p style={{padding: 15}}>Override Access</p>
                <div className='rectangle2'>
                    <form className='search-field' ref={nameForm}>
                        <InputField name={'firstname'}/>
                    </form>
                    <button onClick={toggleVisibility}>Search</button>
                </div>
            </div>

            {isVisible &&          
                <div 
                    className='rectangle rectangle3'
                >
                    <h2 style={{color: '#00573F'}}>STUDENT INFORMATION</h2>
                    <div className='student-details'>
                    </div>
                
                </div>
            }           
      </div>
    )
}

export default Box