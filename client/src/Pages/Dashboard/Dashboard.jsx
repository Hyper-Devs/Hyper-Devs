import React from 'react';
import Header from '../../Components/header';
import Greeting from '../../Components/Greeting';
import Box from '../../Components/Dashboard/Box';
import DashFoot from '../../Components/Dashboard/Dashboard-Footer';
import './Dashboard.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Dashboard() {
  return (
    <div className='Dashboard'>
      <Header/>
      <Sidebar />
      <Greeting />
      <div className='dashboard-title'>Dashboard</div>
      <Box/>
      <DashFoot/>
    </div>
  )
}

export default Dashboard;