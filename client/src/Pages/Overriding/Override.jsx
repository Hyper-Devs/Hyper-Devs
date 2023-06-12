import React from 'react';
import './Override.css';
import { Link } from "react-router-dom";
import Sidebar from '../../Components/Sidebar/Sidebar';
import OvrContainer from '../../Components/Override/OvrContainer';
import PageTitle from '../../Components/PageTitle';
import Footer from '../../Components/footer';
import Header2 from "../../Components/Database/Header/Header2";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Override() {
  return (
    <div className='override-container'>
      <Sidebar/>
      <div className="override-content-container">
        <Header2/>
        <div className="container-md">
            <div className="row ps-3 pt-3 pe-3">
              <div className="header-bg ps-4 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <h1 className="text-center fw-bold text-light">System Override</h1>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#helpCollapseDB" aria-expanded="false" aria-controls="helpCollapseDB"> 
                    <HelpOutlineIcon className="help-icon" /> 
                  </button>
                </div>
              </div>

              <div className="collapse bg-secondary bg-opacity-25 border border-bottom-0 border-dark p-3" id="helpCollapseDB">
                <div className="card card-body border border-dark">
                  Note that this system has an alert feature. Meaning that any unexpected RFID-taps or students tap-out before dismissal will alert the system. In instances that the admin allowed an exit, the user can override through this page by specifying the excused student and adding a reason that the admin deemed valid. 
                </div>
              </div>

              <div className="row bg-warning rounded-bottom ps-3 mx-0 mb-0 border border-dark">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item text-dark">
                      <Link className='text-light' to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active text-dark" aria-current="page">
                      Override
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        <div className='override-content' >
          <OvrContainer />
          </div>
          <Footer />
      </div>
    </div>
  );
}

export default Override;