import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function IsAuthenticated ({children}){
    let navigate = useNavigate();
    const user = localStorage.getItem("isLoggedin");
    useEffect(()=>{if (user === null) {
      navigate('/');
    }
    },[]) 
    return(
      <>{user && children}</>
    )
  }

export default IsAuthenticated;