import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
export default function CartItem(props) {
    const { flower, remove, reduce, increase } = props;

    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={flower.imgUrl} alt={flower.name} />
            </div>
            <div className="cart-item-remove" onClick={() => remove(flower.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
            </div>
            <div className="cart-item-title">
                <Link to={`/flower/${flower.id}`}>{flower.name}</Link>
            </div>
            <div className="cart-item-footer">
                <div className="cart-item-price">{flower.Price} $</div>
                <div className="cart-item-count-container">
                    <span
                        className="cart-item-count-inc"
                        onClick={() => reduce(flower.id)}
                    >
                        -
                    </span>
                    <span className="cart-item-count">{flower.count}</span>
                    <span
                        className="cart-item-count-dec"
                        onClick={() => increase(flower.id)}
                    >
                        +
                    </span>
                </div>
            </div>
        </div>
    );
}
