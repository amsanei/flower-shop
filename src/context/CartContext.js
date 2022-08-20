import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        console.log("you've just called addToCart function");
    };

    const removeFromCart = (itemId) => {};

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
