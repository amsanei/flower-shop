import { useContext } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/layout/Header";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
    const { cartItems, removeFromCart, reduceCount, increaseCount } =
        useContext(CartContext);
    let totalPrice = 0;
    cartItems.map((item) => (totalPrice += item.Price * item.count));
    if (cartItems.length === 0) {
        return (
            <>
                <Header />
                <div className="cart-empty">
                    <div className="cart-empty-icon">
                        <FontAwesomeIcon icon={faFaceFrown} />
                    </div>
                    <div className="cart-empty-text">Your cart is empty</div>
                    <Link to="/shop">Shop</Link>
                </div>
                <Footer />
            </>
        );
    }
    return (
        <>
            <Header />
            <div className="cart-container">
                <div className="cart-items-container">
                    <div className="cart-items-title">Your cart</div>
                    <div className="cart-items">
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
                </div>
                <div className="cart-checkout">
                    <div>
                        Subtotal for <strong>{cartItems.length}</strong> item(s)
                        : <strong>{totalPrice} $</strong>
                    </div>
                    <button className="btn btn-prime cart-checkout-btn">
                        <Link to="/checkout">Checkout</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}
