import { useContext } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/layout/Header";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cartItems, removeFromCart, reduceCount, increaseCount } =
        useContext(CartContext);
    let totalPrice = 0;
    cartItems.map((item) => (totalPrice += item.Price * item.count));
    if (cartItems.length === 0) {
        return (
            <>
                <Header />
                <div>your cart is empty</div>
            </>
        );
    }
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
            <div>
                <div>your total is {totalPrice}</div>
                <Link to="/checkout">Checkout</Link>
            </div>
        </>
    );
}
