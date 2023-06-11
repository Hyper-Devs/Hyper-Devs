import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GlobalModal from '../Components/Modal/globalmodal';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import api from "../api/api"


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
    const token = localStorage.getItem("accessToken");

    useEffect(()=>{
      if (!token) {
      setTitleModal("Unauthorized Access.");
      setBodyModal("Please Login to access the page!")
      setShowModal(true)
    } else {
      const decodedToken = jwt_decode(token);
            const accessID = decodedToken.AccessID;
            api.get(`/database/check-access-id/${accessID}`)
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
        {isLoading && <p>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          
          </p>}
        {!isLoading && accessIDExists && <>{children}</>}
        {!isLoading && !accessIDExists && (
          <>
            <p>Server Error. Refresh Page</p>
            <button onClick={() => navigate('/')}>Go to Login</button>
          </>
            )}
      </div>
    )
  }

export default IsAuthenticated;