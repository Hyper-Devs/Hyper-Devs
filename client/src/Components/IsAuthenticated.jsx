import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GlobalModal from '../Components/Modal/globalmodal';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


function IsAuthenticated ({children}){

    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal
    const [isLoading, setIsLoading] = useState(true);
    const [accessIDExists, setAccessIDExists] = useState(false);


    const handleCloseModal = () => {
      setShowModal(false);
      navigate('/');
    };

    let navigate = useNavigate();
    // const user = localStorage.getItem("isLoggedin");
    const token = localStorage.getItem("accessToken");

    useEffect(()=>{
      if (!token) {
      setTitleModal("Unauthorized Access.");
      setBodyModal("Please Login to access the page!")
      setShowModal(true)
    } else {
      const decodedToken = jwt_decode(token);
            const accessID = decodedToken.AccessID;
            axios.get(`http://localhost:8800/database/check-access-id/${accessID}`)
                .then(response => {
                    setAccessIDExists(response.data.exists);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error(error);
                    setIsLoading(false);
                });
    }
    },[token])
    


    return(
      <div>
        <GlobalModal
            showModal={showModal}
            title={titleModal}
            body={bodyModal}
            onClose={handleCloseModal}
        />
        {isLoading && <p>Loading...</p>}
        {!isLoading && accessIDExists && <>{children}</>}
        {!isLoading && !accessIDExists && (
          <>
            <p>You do not have access to this page.</p>
            <button onClick={() => navigate('/')}>Go to Login</button>
          </>
            )}
      </div>
    )
  }

export default IsAuthenticated;