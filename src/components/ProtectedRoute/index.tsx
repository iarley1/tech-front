import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const AuthRoutes = () => {
    const { user, loading } = useContext(UserContext)

    if(loading) {
        return (<div className="spinner"></div>)
    }
      
    if(user){
        return <Outlet />
    }else{     
        return <Navigate to="/" />
    }
}
  