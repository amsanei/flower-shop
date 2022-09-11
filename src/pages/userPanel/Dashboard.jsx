import { useContext } from "react";
import UserContext from "../../context/UserContext";
import SalesContext from "../../context/SalesContext";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Sidebar from "./Sidebar";

export default function Dashboard() {
    const { loggedinUser } = useContext(UserContext);

    const { getUserShopHistory } = useContext(SalesContext);

    const userShopHistory = getUserShopHistory(loggedinUser.id);

    return (
        <>
            <Header />
            <div className="user-panel">
                <Sidebar />
                <div className="user-panel-body">
                    <div className="user-panel-header">
                        <div className="user-panel-header-title">Dashbaord</div>
                    </div>
                    <div className="user-panel-content">
                        <div className="shop-history">
                            <div>you shoped {userShopHistory.length} time</div>
                            <Link to="/user-panel/shop-history">
                                my shoping history
                            </Link>
                        </div>
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
