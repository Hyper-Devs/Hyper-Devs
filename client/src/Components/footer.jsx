import React from 'react'
import './footer.css'

import HDLogo from '../Assets/hd_logo.png'

function footer() {
  return (
    <div className='page-footer'>
      <div className='footer-content-1'>
        <p>Design and Implemented by:</p>
      </div>
      <div className='footer-content-2'>
        <p>Contact us:  <a href="" className='footer-email'>upc.hyperdevs@gmail.com</a></p>
      </div>
      <div>
        <img className='footer-hdlogo' src={HDLogo} alt="hyperDevsLogo" />
      </div>
      
    </div>
  )
}

export default footer
