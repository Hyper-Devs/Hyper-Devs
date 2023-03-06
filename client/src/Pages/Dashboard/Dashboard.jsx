import React from 'react';
import Header from '../../Components/header';
import border from '../../Assets/ADMIN BORDERRR 1.png';
import './Dashboard.css'


function Dashboard() {
  return (
    <div className='Dashboard'>
      <Header/>
      <div className='background'></div>
      <div className='body-bottom'></div>
      <div className='dashboard-title'>Dashboard</div>
      <div className='admin-border-top'><img src={border} /></div>
      <div className='welcome-message'>Welcome back, User.</div>
      <div className='admin-border-bottom'><img src={border} /></div>
      <div className='LiveBox'>
        <div className='rectangle'></div>
        <div className='rectangle2'></div>
        <div className='rectangle3'></div>
        <div className='Clock'>
          <div className='rectangle_clock'></div>
          <div className='Time'>12:00:00 AM</div>
        </div>
        <div className='Date'>
          <div className='rectangle_date'></div>
          <div className='Month'>March</div>
          <div className='Day'>08</div>
          <div className='Year'>2023</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;