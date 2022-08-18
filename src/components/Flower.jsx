export default function Flower(props) {
    const { flower } = props;
    return (
        <div className="flower">
            <h1 className="flower-title">{flower.name}</h1>
            <p className="flower-desc">{flower.description}</p>
            <div className="flower-price">{flower.Price}</div>
            <button className="flower-add-to-cart">Add to cart</button>
        </div>
    );
}
