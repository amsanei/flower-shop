import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <div className="header-container">
            <header className="header">
                <div className="header-logo">
                    <h1>
                        <span>Flower</span> Shop
                    </h1>
                </div>
                <ul className="header-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                </ul>
                <div className="header-icons">
                    <Link to="/user-panel">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                </div>
            </header>
        </div>
    );
}
