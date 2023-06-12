import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Database.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Sidebar from '../../Components/Sidebar/Sidebar'
import DatabaseModifier from "../../Components/Database/Database-Modifier";
import DatabaseResult from "../../Components/Database/Database-Result";
import Header2 from "../../Components/Database/Header/Header2";
import Footer1 from "../../Components/footer";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Database() {
  const [searchResult, setSearchResult] = useState('');

  return (
    <div className="database-container" data-testid="dashboard-test">
      <Sidebar />
      <div className="database-content-container">
        <div className="database-content">
          <Header2 />
          <div className="container-md">
            <div className="row ps-3 pt-3 pe-3">
              <div className="header-bg ps-4 d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <h1 className="text-center fw-bold text-light">System Database</h1>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#helpCollapseDB" aria-expanded="false" aria-controls="helpCollapseDB"> 
                    <HelpOutlineIcon className="help-icon" /> 
                  </button>
                </div>
              </div>

              <div className="collapse bg-secondary bg-opacity-25 border border-bottom-0 border-dark p-3" id="helpCollapseDB">
                <div className="card card-body border border-dark">
                  This page displays information and logs of students and admins. Click the help button beside the input box below to access the navigation tutorial. 
                </div>
              </div>

              <div className="row bg-warning rounded-bottom ps-3 mx-0 mb-0 border border-dark">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item text-dark">
                      <Link className='text-light' to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active text-dark" aria-current="page">
                      System Database
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <DatabaseModifier setSearchResult={setSearchResult} />
          <DatabaseResult searchResult={searchResult} />
        </div>
        <Footer1 />
      </div>
    </div>
  );
}

export default Database;
