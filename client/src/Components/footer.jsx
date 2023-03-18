import React from "react";
import "./footer.css";

function footer() {
  return(
    <div className= 'page-footer'>
      <div className="footer-container">
      <div className="col1">
        <div>A project presented to:</div>
        <div><h2>Department of Computer Science</h2></div>
        <div className="footer-upc"><h2>University of the Philippines Cebu</h2></div>
      </div>

      <div className="col2">
        <div>In collaboration with:</div>
        <div><h3>University of the Philippines Cebu High School</h3></div>
      </div>
        
      <div className="col3">
        <div>Designed and implemented by:</div>
        <div><h2>Hyper Devs</h2></div> 
        <div>Reach us:<a href="#">upc.hyperdevs@gmail.com</a></div>
      </div>
      </div>
      <hr />
      <div className='copyright-stmnt'>&copy; UPCHS 2023. All rights reserved.</div>

    </div>  
  )
}
export default footer;