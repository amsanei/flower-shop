import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                </ul>
                <div className="header-icons">
                    <NavLink to="/user-panel">
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    <NavLink to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </NavLink>
                </div>
            </header>
        </div>
    );
}
