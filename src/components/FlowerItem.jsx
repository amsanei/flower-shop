import { Link } from "react-router-dom";

export default function FlowerItem(props) {
    const { flower } = props;
    return (
        <div className="flower">
            <h1 className="flower-title">{flower.name}</h1>
            <p className="flower-desc">{flower.description}</p>
            <div className="flower-price">{flower.Price}</div>
            <button className="flower-add-to-cart">Add to cart</button>
            <Link to={`/flower/${flower.id}`}>More detail</Link>
        </div>
    );
}