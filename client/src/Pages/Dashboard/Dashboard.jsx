import React from 'react'

import './Dashboard.css'
import Header from '../../Components/header'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <Header />
      <Sidebar />

    </div>
  )
}

export default Dashboard
