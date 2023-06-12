import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GlobalModal from '../Components/Modal/globalmodal';
import jwt_decode from 'jwt-decode';
import api from "../api/api"


function IsAuthenticatedReg ({children}){

    const [titleModal, setTitleModal] = useState('');
    const [bodyModal, setBodyModal] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal
    const [isLoading, setIsLoading] = useState(true);
    const [accessIDExists, setAccessIDExists] = useState(false);
    const [isUserTableEmpty, setIsUserTableEmpty] = useState(false)


    const handleCloseModal = () => {
      setShowModal(false);
      navigate('/');
    };

    let navigate = useNavigate();
    const token = localStorage.getItem("accessToken");

    useEffect(()=>{
      api.get("/count")
      .then(response => {
          if (response.data.count === 0) {
          setIsUserTableEmpty(true);
          setAccessIDExists(true);
          setIsLoading(false);
          } else {

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
      
              if (decodedToken.role === null || decodedToken.role === undefined || decodedToken.role !== 'Admin') {
                setTitleModal("Access Denied.");
                setBodyModal("You do not have access to this page! If required, please contact another user with higher authorization.")
                setShowModal(true)
              }
          }
          }
      })
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
        {!isLoading && (accessIDExists || isUserTableEmpty) && <>{children}</>}
        {!isLoading && (!accessIDExists || !isUserTableEmpty) && (
          <>
            <p>Server Error. Refresh Page</p>
            <button onClick={() => navigate('/')}>Go to Login</button>
          </>
            )}
      </div>
    )
  }

export default IsAuthenticatedReg;