import { useContext } from "react";
import CartContext from "./../context/CartContext";
import FlowerContext from "../context/FlowerContext";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function FlowerDetail(props) {
    const { id } = useParams();
    const { getFlower } = useContext(FlowerContext);
    const flower = getFlower(id);
    const { addToCart } = useContext(CartContext);
    return (
        <div className="flower-container">
            <div className="flower-img">
                <img src={flower.imgUrl} alt="" />
            </div>
            <div className="flower-info">
                <h1 className="flower-title">{flower.name}</h1>
                <p className="flower-desc">{flower.description}</p>
                <div className="flower-info-footer">
                    <div className="flower-price">{flower.Price}$ / each</div>
                    <div className="btn-row">
                        <button
                            className="btn btn-prime btn-icon"
                            onClick={() => addToCart(flower)}
                        >
                            <FontAwesomeIcon icon={faCartShopping} />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
