import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDashboard,
    faBagShopping,
    faUser,
    faComment,
    faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    const navigate = useNavigate();

    const { loggedinUser, userLogout } = useContext(UserContext);
    const logout = () => {
        userLogout();
        navigate("/login");
    };
    return (
        <div className="user-panel-sidebar">
            <div className="sidebar-user-info-container">
                <div className="sidebar-user-img">
                    <img
                        src={loggedinUser.imageUrl}
                        alt=""
                    />
                </div>
                <div className="sidebar-user-info">
                    <div className="sidebar-user-name">
                        {loggedinUser.fullName}
                    </div>
                    <div className="sidebar-user-logout" onClick={logout}>
                        Log out
                    </div>
                </div>
            </div>
            <ul className="sidebar-links">
                <li className="sidebar-links-item">
                    <Link to="/user-panel" className="text-with-icon">
                        <FontAwesomeIcon icon={faDashboard} />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/user-panel/orders" className="text-with-icon">
                        <FontAwesomeIcon icon={faBagShopping} />
                        Orders
                    </Link>
                </li>
                <li>
                    <Link to="/user-panel/information" className="text-with-icon">
                        <FontAwesomeIcon icon={faUser} />
                        Information
                    </Link>
                </li>
                <li>
                    <Link to="/user-panel/comments" className="text-with-icon">
                        <FontAwesomeIcon icon={faComment} />
                        Comments
                    </Link>
                </li>
            </ul>
            <div className="user-panel-sidebar-footer">
                <Link to="/user-panel" className="text-with-icon">
                    <FontAwesomeIcon icon={faCircleQuestion} />
                    Contact with us
                </Link>
            </div>
        </div>
    );
}
