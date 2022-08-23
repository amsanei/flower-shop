import { Link } from "react-router-dom";
export default function CartItem(props) {
    const { flower, remove, reduce, increase } = props;

    return (
        <div className="flower">
            <Link to={`/flower/${flower.id}`}>
                <h1 className="flower-title">{flower.name}</h1>
            </Link>
            <p className="flower-desc">{flower.description}</p>
            <div className="flower-price">{flower.Price}</div>
            <button onClick={() => remove(flower.id)}>Remove</button>
            <div>
                <button onClick={() => reduce(flower.id)}>-</button>
                <span>{flower.count}</span>
                <button onClick={() => increase(flower.id)}>+</button>
            </div>
        </div>
    );
}