import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function UserPanel() {
    const { loggedinUser } = useContext(UserContext);
    return <div>logged in as {loggedinUser.username}</div>;
}
