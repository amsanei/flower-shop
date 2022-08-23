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
            <p>Hello {loggedinUser.username}</p>
            <div className="shop-history">
                <div></div>
            </div>
            <Link to="/">Home</Link>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
