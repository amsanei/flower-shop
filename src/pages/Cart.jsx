import { useContext } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import CartContext from "../context/CartContext";

export default function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);
    return (
        <>
            <Header />
            <div>
                {cartItems.map((item) => (
                    <CartItem flower={item} remove={removeFromCart} />
                ))}
            </div>
        </>
    );
}
