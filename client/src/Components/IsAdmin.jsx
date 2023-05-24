import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GlobalModal from '../Components/Modal/globalmodal';
import Dashboard from "../Pages/Dashboard/Dashboard";


function IsAdmin ({children}){

    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

    const handleCloseModal = () => {
      // navigate('/dashboard');
      setShowModal(false);
      navigate('/dashboard');
    };

    let navigate = useNavigate();
    const user = localStorage.getItem("isLoggedin");
    const userRole = JSON.parse(user)
    useEffect(()=>{if (user === null) {
      navigate('/');
    }
    else if (userRole[0].role === 'User'){
      setTitleModal("Unauthorized Access.");
      setBodyModal("You do not have access to this page! If required, please contact another user with higher authorization.")
      setShowModal(true)
    }
    },[]) 

    return(
      <div>
        <GlobalModal
            showModal={showModal}
            title={titleModal}
            body={bodyModal}
            onClose={handleCloseModal}
        />
        <>{user && children}</>
      </div>
    )
  }

export default IsAdmin;