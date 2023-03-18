import React from "react";
import "./footer.css";

function footer() {
  return(
    <div className= 'footer-content'>
      <div className="footer-container">
        <div className="col1-container">
          <div className="col1">
          <div>A project presented to:</div>
          <div className="footer-cs-text"><h2>Department of Computer Science</h2></div>
          <div className="footer-upc-text"><h2>University of the Philippines Cebu</h2></div>
          </div>
          <div className="footer-logos">
          <div className="footer-cs-logo"></div><div className="footer-upc-logo"></div>
          </div>
        </div>
          
        <div>
          <div>In collaboration with:</div>
          <div><h3>University of the Philippines Cebu High School</h3></div>
        </div>
        
        <div>
            <div className="col3">
              <div className="col3-container">
              <div>Designed and implemented by:</div>
              <div><h2>Hyper Devs</h2></div>
              </div>
              <div className="footer-hd-logo"></div>
            </div>
          <div className="footer-reach-us">Reach us:<a href="#">upc.hyperdevs@gmail.com</a></div>
        </div>
      </div>
      <hr />
      <div className='copyright-stmnt'>&copy; UPCHS 2023. All rights reserved.</div>
    </div>  
  )
}
export default footer;