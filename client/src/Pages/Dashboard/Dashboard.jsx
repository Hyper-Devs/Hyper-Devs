import React from "react";

import "./Dashboard.css";
import Header from "../../Components/header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Greetings from "../../Components/Greeting";
import Box from "../../Components/Dashboard/Box";
import Dfooter from "../../Components/Dashboard/Dashboard-Footer";
import Footer from "../../Components/footer";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Header />
        <Greetings />
        <Box />
        <div className="dashboard-footer">
          <Dfooter />
          {/*<Footer />*/}
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default Dashboard;
