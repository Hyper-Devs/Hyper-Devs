import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GlobalModal from '../Components/Modal/globalmodal';


function IsAuthenticated ({children}){

    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

    const handleCloseModal = () => {
      // navigate('/');
      setShowModal(false);
      navigate('/');
    };

    let navigate = useNavigate();
    const user = localStorage.getItem("isLoggedin");
    useEffect(()=>{if (user === null) {
      setTitleModal("Unauthorized Access.");
      setBodyModal("Please Login to access the page!")
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

export default IsAuthenticated;