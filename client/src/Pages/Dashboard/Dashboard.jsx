import React from "react";
import './Dashboard.css'
import Header from '../../Components/header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import PageTitle from '../../Components/PageTitle'
import Box from '../../Components/Dashboard/Box'
import Footer from '../../Components/footer'
import Header2 from "../../Components/Database/Header/Header2";

function Dashboard() {
  return (
    <div className="dashboard-container" data-testid="dashboard-test">
      <Sidebar />
      <div className="dashboard-content-container">
      <div className="dashboard-content">
        <Header2/>
        <Header />
        
        <PageTitle pageName={"Dashboard"}/>
        <Box />
        </div>
        <Footer />
        </div>
    </div>
  );
}

export default Dashboard;
