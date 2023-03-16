import React from "react";
import "./footer.css";

import UPClogo from "../Assets/upc_logo.png";
import DCSlogo from "../Assets/dept_compsci.png";
import HDlogo from "../Assets/hd logo black.png";

function footer() {
  return(
    <div className= 'page-footer'>
      <div className='presented-to'><p>A project presented to:</p></div>
      <div className='recipient-1'><p>Department of Computer Science</p></div>
      <div className='recipient-2'><p>University of the Philippines-Cebu</p></div>
      {/* <div className="foot-logo-1"><img src={DCSlogo}/></div>
      <div className='foot-logo-2'><img src={UPClogo}/></div> */}

      <div className='in-collab'><p>In collaboration with:</p></div>
      <div className='collaborator'><p>University of the Philippines Cebu High School</p></div>  
      
      <div className='copyright-stmnt'><p>ⓒUPCHS 2023. All rights reserved.</p></div>

      <div className='des-imp-by'><p>Designed and implemented by:</p></div>
      <div className='dev-hyperdevs'><p>Hyper Devs</p></div> 

      <div className='reach-us'><>Reach us:</></div>
      <div className='hyperdevs-email'><p>upc.hyperdevs@gmail.com</p></div>


    </div>  
  )
}
export default footer;