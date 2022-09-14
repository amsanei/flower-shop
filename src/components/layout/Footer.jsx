import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faAt,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-card">
                    <div className="footer-card-body">
                        <div className="footer-site-title"><span>Flower</span> Shop</div>
                        <div className="footer-site-decs">
                            Some random stuff about flower shop and some more
                            info cuz this box had to get fill Some random stuff
                            about flower shop and some more info cuz this box
                            had to get fill Some random stuff about flower shop
                            and some more info cuz this box had to get fill
                        </div>
                    </div>
                </div>
                <div className="footer-card">
                    <div className="footer-card-title">Links</div>
                    <div className="footer-card-body">
                        <ul className="footer-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer-card">
                    <div className="footer-card-title">Contact info</div>
                    <div className="footer-card-body">
                        <div className="footer-contact">
                            <div className="icon-text">
                                <FontAwesomeIcon icon={faPhone} />
                                +1 236 5489
                            </div>
                            <div className="icon-text">
                                <FontAwesomeIcon icon={faAt} />
                                support@flowers.com
                            </div>
                            <div className="icon-text">
                                <FontAwesomeIcon icon={faLocationDot} />
                                26985 Brighton Lane, Lake Forest, CA
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-byline">
                Devloped and desgined by <a href="#">@Amsanei</a>
            </div>
        </footer>
    );
}
