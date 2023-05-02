import React from 'react';
import './Override.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import OvrContainer from '../../Components/Override/OvrContainer';
import PageTitle from '../../Components/PageTitle';
import Footer from '../../Components/footer';


function Override() {
  return (
    <div className='override-container'>
      <div className="override-content-container">
        <div>
          <Sidebar/>
        </div>
        <div className='override-content' >
          <PageTitle pageName={"Override"} />
          <OvrContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Override;