import React from 'react'
import './Override.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import OvrContainer from '../../Components/Override/OvrContainer'
import Footer from '../../Components/footer'

function Override() {
    return (
      <div className='override-container'>
        
        <div className='override-page-proper' >
            <div className='override-content'>
            </div>
            <Footer/>
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