import React from 'react'

import './Override.css'
import Header from '../../Components/header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Greetings from '../../Components/Greeting'
import Box from '../../Components/Override/Box'
import Footer from '../../Components/footer'



function Override() {
    return (
      <div className='override-container'>
        <div className='override-page-proper' >
            <Header />
            <Greetings />
            <div className='override-content'>
              <Box/>
            </div>
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