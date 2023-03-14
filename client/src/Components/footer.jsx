import React from 'react'
import './footer.css'

import UPClogo from '../Assets/upc_logo.png'
import DCSlogo from '../Assets/dept_compsci.png'
import HDlogo from '../Assets/hd logo black.png'


function footer() {
  return (
    <div className='page-footer'>
      <div className = 'footer-container'>
        </div>
      <div className='footer-content'>
        <div className='presented-to-section'>
          <div className='presented-to-stmnt'>
            <p>Presented to:</p>
          </div>
          <div className='recipient1'>
            <p>Department of Computer Science</p>
          </div>
          <div className='recipient2'>
            <p>University of the Philippines Cebu</p>
          </div>
          <div>
            <img className='DCS-logo'> src={DCSlogo} alt="DepSciLogo"</img>
          </div>
          <div>
            <img className='UPC-logo'> src={UPClogo} alt="UnivPhilCLogo"</img>
          </div>
        </div>

        <div className='collab-section'>
          <div className='collab-stmnt'>
            <p>In collaboration with:</p>
          </div>
          <div className='collaborator'>
            <p>University of the Philippines Cebu High School</p>
          </div>
        </div>

        <div className='copyright-section'>
          <div className='copyright-stmnt'>
            <p>ⓒUPCHS 2023. All rights reserved.</p>
          </div>
        </div>

        <div className='dev-section'>
          <div className='dev-stmnt'>
            <p>Designed and implemented by:</p>
          </div>
          <div className='developers'>
            <p>Hyper Devs</p>
          </div>
          <div>
            <img className='hyperdevs-logo'> src={HDlogo} alt="hyperDevsLogo"</img>
            </div>
        </div>

        <div className='reach-us-section'>
          <div className='reach-us-stmnt'>
            <p>Reach us:</p>
          </div>
          <div className='email-address'>
            <p>upc.hyperdevs@gmail.com</p>
          </div>
        </div>

      </div>  
    </div>
  )
}

export default footer
    {/*<div className='page-footer'>
      <div className='footer-content-1'>
        <p>Design and Implemented by:</p>
      </div>
      <div className='footer-content-2'>
        <p>Contact us:  <a href="" className='footer-email'>upc.hyperdevs@gmail.com</a></p>
      </div>
      <div>
        <img className='footer-hdlogo' src={HDLogo} alt="hyperDevsLogo" />
  </div>*/}