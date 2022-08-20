import { useContext } from "react";
import CartContext from "./../context/CartContext";

export default function FlowerDetail(props) {
    const { flower } = props;
    const { addToCart } = useContext(CartContext);
    return (
        <div className="flower">
            <h1 className="flower-title">{flower.name}</h1>
            <p className="flower-desc">{flower.description}</p>
            <div className="flower-price">{flower.Price}</div>
            <button
                className="flower-add-to-cart"
                onClick={() => addToCart(flower)}
            >
                Add to cart
            </button>
        </div>
    );
}
