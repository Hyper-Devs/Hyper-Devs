import React from 'react'
import './Override.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import OvrContainer from '../../Components/Override/OvrContainer'
import Header from '../../Components/header';
import Greetings from '../../Components/Greeting';




function Override() {
    return (
      <div className='override-container'>
        <div className='override-page-proper' >
            <Header />
            <OvrContainer/>
        </div>

        <Sidebar
            buttonState = {{
            item1: false,
            item2: false,
            item3: false,
            item4: false,
            item5: true
            }}
        />
        
      </div>
    )
  }
  
  export default Override