import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flower from "./pages/Flower";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import { FlowerProvider } from "./context/FlowerContext";
import { CartProvider } from "./context/CartContext";
function App() {
    return (
        <FlowerProvider>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/flower/:id" element={<Flower />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </CartProvider>
        </FlowerProvider>
    );
}

export default App;
