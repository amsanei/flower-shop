import { useContext } from "react";
import FlowerContext from "../context/FlowerContext";

export default function UserShopHistoryList(props) {
    const { date, products } = props.data;
    const { getFlower } = useContext(FlowerContext);
    const getShopHistoryProduct = (id, count) => {
        return { product: getFlower(id), count };
    };
    const ShopHistoryProducts = products.map((item) =>
        getShopHistoryProduct(item.id, item.count)
    );

    return (
        <div>
            <div>Date: {date}</div>
            <div>
                <ul>
                    {ShopHistoryProducts.map((item) => (
                        <li>
                            {item.product.name} ({item.count})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
