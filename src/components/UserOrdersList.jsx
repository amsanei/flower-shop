import { useContext } from "react";
import FlowerContext from "../context/FlowerContext";
import { Link } from "react-router-dom";

export default function UserOrdersList(props) {
    const { date, products, state } = props.data;
    const { getFlower } = useContext(FlowerContext);
    const getShopHistoryProduct = (id, count) => {
        return { product: getFlower(id), count };
    };
    const ShopHistoryProducts = products.map((item) =>
        getShopHistoryProduct(item.id, item.count)
    );
    let totalPrice = 0;
    products.map((item) => totalPrice += item.count * item.Price);

    return (
        <div className="user-orders-list-item">
            <div className="user-orders-list-item-header">
                <div>
                    <span className="data-label">State</span> {state}
                </div>
                <div>
                    <span className="data-label">Price</span> {totalPrice}$
                </div>
                <div>
                    <span className="data-label">Date</span> {date}
                </div>
                <div className="user-orders-list-item-more-detail">
                    More detail
                </div>
            </div>
            <ul className="user-orders-list-item-products">
                {ShopHistoryProducts.map((item) => (
                    <li>
                        <Link to={`/flower/${item.product.id}`}>
                            <img
                                src={item.product.imgUrl}
                                alt={item.product.title}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
