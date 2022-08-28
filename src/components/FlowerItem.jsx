import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function FlowerItem(props) {
    const { flower } = props;
    const { addToCart } = useContext(CartContext);
    return (
        <div className="card-product">
            <div className="card-product-img">
                <img
                    src="https://images.unsplash.com/photo-1593026238161-ac5f86e5ef79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt=""
                />
            </div>
            <h1 className="card-product-title">
                <Link to={`/flower/${flower.id}`}>{flower.name}</Link>
            </h1>
            <div className="card-product-footer">
                <div className="card-product-price">{flower.Price}</div>
                <div
                    className="card-product-add-to-cart"
                    onClick={() => addToCart(flower)}
                >
                    <FontAwesomeIcon icon={faCartShopping} />
                    Add to cart
                </div>
            </div>
        </div>
    );
}
