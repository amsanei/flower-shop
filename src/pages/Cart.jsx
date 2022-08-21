import { useContext } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import CartContext from "../context/CartContext";

export default function Cart() {
    const { cartItems, removeFromCart, reduceCount, increaseCount } =
        useContext(CartContext);
    return (
        <>
            <Header />
            <div>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        flower={item}
                        remove={removeFromCart}
                        reduce={reduceCount}
                        increase={increaseCount}
                    />
                ))}
            </div>
        </>
    );
}
