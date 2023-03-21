import React from "react";
import './Dashboard.css'
import Header from '../../Components/header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import PageTitle from '../../Components/PageTitle'
import Box from '../../Components/Dashboard/Box'


function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Header />
        <PageTitle pageName={"Dashboard"}/>
        <Box />
      </div>
      <Sidebar
        buttonState={{
          item1: true,
          item2: false,
          item3: false,
          item4: false,
          item5: false,
        }}
      />
    </div>
  );
}

export default Dashboard;
