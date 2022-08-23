import { useContext } from "react";
import UserShopHistoryList from "../components/UserShopHistoryList";
import SalesContext from "../context/SalesContext";
import UserContext from "../context/UserContext";

export default function UserShopHistory() {
    const { loggedinUser } = useContext(UserContext);
    const { getUserShopHistory } = useContext(SalesContext);

    const userShopHistory = getUserShopHistory(loggedinUser.id);

    return (
        <div>
            {userShopHistory.map((item) => (
                <UserShopHistoryList data={item} />
            ))}
        </div>
    );
}
