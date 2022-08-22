import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Header() {
    const { cartItems } = useContext(CartContext);
    return (
        <header>
            <div className="header-logo">Flower Shop</div>
            <div className="header-search">
                <input type="text" />
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Cart ({cartItems.length})</Link>
                    </li>
                    <li>
                        <Link to="/user-panel">user panel</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
