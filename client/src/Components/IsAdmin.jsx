import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GlobalModal from '../Components/Modal/globalmodal';
import jwt_decode from 'jwt-decode';


function IsAdmin ({children}){

    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

    const handleCloseModal = () => {
      setShowModal(false);
      navigate('/dashboard');
    };

    let navigate = useNavigate();

    const token = localStorage.getItem("accessToken");
    const decodedToken = jwt_decode(token);
    console.log(token, decodedToken)

    useEffect(()=>{
      if (token === null || decodedToken.role === null || decodedToken.role === undefined) {
        navigate('/');
    } else if (decodedToken.role !== 'Admin'){
      setTitleModal("Access Denied.");
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
        <>{token && children}</>
      </div>
    )
  }

export default IsAdmin;