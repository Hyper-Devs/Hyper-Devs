import React from 'react';
import './Override.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import OvrContainer from '../../Components/Override/OvrContainer';
import PageTitle from '../../Components/PageTitle';
import Footer from '../../Components/footer';
import Header2 from "../../Components/Database/Header/Header2";


function Override() {
  return (
    <div className='override-container'>
      <Sidebar/>
      <div className="override-content-container">
        <div className='override-content' >
          <Header2/>
          <PageTitle pageName={"Override"} />
          <OvrContainer />
          </div>
          <Footer />
      </div>
    </div>
  );
}

export default Override;