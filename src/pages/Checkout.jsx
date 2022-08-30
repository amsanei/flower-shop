import { useContext } from "react";
import UserContext from "../context/UserContext";
import SalesContext from "../context/SalesContext";
import CartContext from "../context/CartContext";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";

export default function Checkout() {
    const { isLoggedin, loggedinUser } = useContext(UserContext);
    const { cartItems } = useContext(CartContext);
    const { newSale } = useContext(SalesContext);
    if (isLoggedin) {
        const userOrder = {
            userId: loggedinUser.id,
            products: cartItems,
        };
        return (
            <>
                <Header />
                <div>
                    <button onClick={() => newSale(userOrder)}>pay</button>
                </div>
            </>
        );
    } else {
        return (
            <>
                <Header />
                <div>
                    You have to first <Link to="/login">login</Link> or
                    <Link to="/login">sign up</Link>
                </div>
            </>
        );
    }
}
