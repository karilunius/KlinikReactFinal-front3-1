import { Navigate, Outlet } from 'react-router';
import { useContext } from "react";
import { LoginContext } from "../context/loginContext.jsx";



export const ProtectedRoute = () => {

    const { isLogged } = useContext(LoginContext);

    return (
            isLogged ? <Outlet/> : <Navigate to="/login" />
        )
};

export default ProtectedRoute;