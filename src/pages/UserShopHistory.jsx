import { useContext } from "react";
import UserShopHistoryList from "../components/UserShopHistoryList";
import SalesContext from "../context/SalesContext";
import UserContext from "../context/UserContext";
import Header from "../components/layout/Header";

export default function UserShopHistory() {
    const { loggedinUser } = useContext(UserContext);
    const { getUserShopHistory } = useContext(SalesContext);

    const userShopHistory = getUserShopHistory(loggedinUser.id);

    return (
        <div>
            <Header />
            {userShopHistory.map((item) => (
                <UserShopHistoryList key={item.id} data={item} />
            ))}
        </div>
    );
}
