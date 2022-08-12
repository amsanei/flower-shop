import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
                        <Link to="/Cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
