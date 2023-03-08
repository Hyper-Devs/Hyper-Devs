import React from 'react';
import Header from '../../Components/header';
import Greeting from '../../Components/Greeting';
import Box from '../../Components/Dashboard/Box';
import DashFoot from '../../Components/Dashboard/Dashboard-Footer';
import './Dashboard.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Dashboard() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      height: "100%",
      width: "100%",
    },
  };
  
  return (
    <>
      <div style={styles.contentDiv}>
        <Sidebar></Sidebar>
        <div style={styles.contentMargin}>
          <Header/>
          <Greeting/>
          <div className='dashboard-title'>Dashboard</div>
          <Box/>
          <DashFoot/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;