import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function FlowerItem(props) {
    const { flower } = props;
    const { addToCart } = useContext(CartContext);
    const [alertShow, setAlertShow] = useState(false);
    const closeAlert = () => {
        setAlertShow(false);
    };
    const addToCartClick = () => {
        setAlertShow(true);
        addToCart(flower);
    };
    return (
        <>
            <div className={`modal-mask ${alertShow && "modal-show"}`}>
                <div className="modal">
                    <div className="modal-icon">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                    <div className="modal-text">
                        Flower successfully added to your cart.
                    </div>
                    <div className="modal-footer">
                        <Link to="/cart">cart</Link>
                        <button onClick={closeAlert} className="btn btn-prime">
                            Ok!
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-product">
                <div className="card-product-img">
                    <img src={flower.imgUrl} alt={flower.name} />
                </div>
                <h1 className="card-product-title">
                    <Link to={`/flower/${flower.id}`}>{flower.name}</Link>
                </h1>
                <div className="card-product-footer">
                    <div className="card-product-price">{flower.Price}</div>
                    <div
                        className="card-product-add-to-cart"
                        onClick={addToCartClick}
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                        Add to cart
                    </div>
                </div>
            </div>
        </>
    );
}
