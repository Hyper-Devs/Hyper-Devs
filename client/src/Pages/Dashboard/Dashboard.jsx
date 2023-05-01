import React from "react";
import './Dashboard.css'
import Header from '../../Components/header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import PageTitle from '../../Components/PageTitle'
import Box from '../../Components/Dashboard/Box'
import Footer from '../../Components/footer'
import NewSidebar from "../../Components/Sidebar/NewSidebar";

function Dashboard() {
  return (
    <div className="dashboard-container" data-testid="dashboard-test">
      <div className="dashboard-content-container">
      <div>
      <NewSidebar />
      </div>

      <div className="dashboard-content">
        <Header />
        <PageTitle pageName={"Dashboard"}/>
        <Box />
        {/* <Footer /> */}
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
