import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate,Link } from "react-router-dom";

export default function UserPanel() {
    const navigate = useNavigate();
    const { loggedinUser, userLogout } = useContext(UserContext);
    const logout = () => {
        userLogout();
        navigate('/login')
    };
    return (
        <div>
            <p>logged in as {loggedinUser.username}</p>
            <Link to="/">Home</Link>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
