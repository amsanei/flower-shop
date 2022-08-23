import { useContext } from "react";
import UserContext from "../context/UserContext";
import SalesContext from "../context/SalesContext";
import { useNavigate, Link } from "react-router-dom";

export default function UserPanel() {
    const navigate = useNavigate();
    const { loggedinUser, userLogout } = useContext(UserContext);
    const { getUserShopHistory } = useContext(SalesContext);

    const userShopHistory = getUserShopHistory(loggedinUser.id);
    const logout = () => {
        userLogout();
        navigate("/login");
    };
    return (
        <div>
            <p>Hello {loggedinUser.username}</p>
            <div className="shop-history">
                <div>you shoped {userShopHistory.length} time</div>
                <Link to="/user-panel/shop-history">my shoping history</Link>
            </div>
            <Link to="/">Home</Link>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
