import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function IsAdmin ({children}){
    let navigate = useNavigate();
    const user = localStorage.getItem("isLoggedin");
    const userRole = JSON.parse(user)
    useEffect(()=>{if (user === null) {
      navigate('/');
    }
    else if (userRole[0].role === 'User'){
      navigate('/dashboard');
      // popup or modal // "You do not have access to this page"
    }
    },[]) 
    return(
      <>{user && children}</>
    )
  }

export default IsAdmin;