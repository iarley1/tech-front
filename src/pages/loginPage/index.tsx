import { useContext } from "react";
import { FormLogin } from "../../components/FormLogin";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import { StyleLoginPage } from "./styles";

export function LoginPage () {
    const { user } = useContext(UserContext)

    if(user){
        return <Navigate to="/dashboard" /> 
    } else {
        return (
            <StyleLoginPage>
               <FormLogin />
            </StyleLoginPage>
        )
    }

    
}