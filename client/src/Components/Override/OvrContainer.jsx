import './OvrContainer.css';
import React, { useRef, useState } from 'react';
import InputField from './SearchField';
import  Footer from '../footer';

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
            <div className='first-container'>
                <p style={{padding: 15}}>Override Access</p>
                <div className='search-content'>
                    <form 
                        className='search-field' 
                        ref={nameForm}>
                        <InputField name={'firstname'}/>
                    </form>

                    <button onClick={toggleVisibility}>Search</button>     
                </div>
            </div>
            {/*Search results from the input field is reflected by the following code block*/}
            {isVisible &&          
                <div className='search-result'>
                    <h2 style={{color: '#00573F'}}>STUDENT INFORMATION</h2>
                    <div className='student-details'>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>
                        <p>ASHDOLajsh</p>

                    </div>
                </div>
            } 

            <Footer/>  
      </div>
    )
}

export default Box