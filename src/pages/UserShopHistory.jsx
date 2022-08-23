import { useContext } from "react";
import SalesContext from "../context/SalesContext";
import UserContext from "../context/UserContext";


export default function UserShopHistory() {
    const { loggedinUser } = useContext(UserContext);
    const { getUserShopHistory } = useContext(SalesContext);

    const userShopHistory = getUserShopHistory(loggedinUser.id);

    return (
        <div>
            {userShopHistory.map((item) => (
                <div>Date: {item.date}</div>
            ))}
        </div>
    );
}
