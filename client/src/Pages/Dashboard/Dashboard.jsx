import React from 'react';
import Header from '../../Components/header';
import Greeting from '../../Components/Greeting';
import Box from '../../Components/Dashboard/Box';
import DashFoot from '../../Components/Dashboard/Dashboard-Footer';
import './Dashboard.css'

function Dashboard() {
  return (
    <div className='Dashboard'>
      <Header/>
      <Greeting />
      <div className='dashboard-title'>Dashboard</div>
      <Box/>
      <DashFoot/>
    </div>
  )
}

export default Dashboard;