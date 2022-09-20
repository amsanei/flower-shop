import Header from "../../components/layout/Header";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import UserShopHistoryList from "../../components/UserOrdersList";
import SalesContext from "../../context/SalesContext";
import UserContext from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function UserOrders() {
    const { loggedinUser } = useContext(UserContext);
    const { getUserShopHistory } = useContext(SalesContext);

    const userShopHistory = getUserShopHistory(loggedinUser.id);
    console.log(userShopHistory);

    return (
        <>
            <Header />
            <div className="user-panel">
                <Sidebar />
                <div className="user-panel-body">
                    <div className="user-panel-header">
                        <div className="user-panel-header-title">
                            Your orders history
                        </div>
                    </div>
                    <div className="user-panel-content">
                        {userShopHistory.length > 0 ? (
                            <div className="user-orders-list">
                                {userShopHistory.map((item) => (
                                    <UserShopHistoryList
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="orders-empty">
                                <div className="orders-empty-icon">
                                    <FontAwesomeIcon icon={faFaceFrown} />
                                </div>
                                <div className="orders-empty-text">
                                    Your orders history is clear
                                </div>
                                <Link to="/shop">Shop</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
