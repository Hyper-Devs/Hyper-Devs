import React from 'react';
import './Override.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import OvrContainer from '../../Components/Override/OvrContainer';
import PageTitle from '../../Components/PageTitle';


function Override() {
    return (
      <div className='override-container'>
        <div className="override-content-container">
          <div>
            <Sidebar
              buttonState = {{
                item1: false,
                item2: false,
                item3: false,
                item4: false,
                item5: true
              }}
            />
          </div>
          <div className='override-content' >
              <PageTitle pageName={"Override"}/>
              <OvrContainer/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Override;