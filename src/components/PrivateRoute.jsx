import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function PrivateRoute() {
    const { isLoggedin } = useContext(UserContext);

    return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
}
