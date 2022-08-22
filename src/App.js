import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flower from "./pages/Flower";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import { UserProvider } from "./context/UserContext";
import { FlowerProvider } from "./context/FlowerContext";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";
function App() {
    return (
        <UserProvider>
            <FlowerProvider>
                <CartProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/flower/:id" element={<Flower />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </Router>
                </CartProvider>
            </FlowerProvider>
        </UserProvider>
    );
}

export default App;
