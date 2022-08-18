import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flower from "./pages/Flower";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import { FlowerProvider } from "./context/FlowerContext";
function App() {
    return (
        <FlowerProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/flower/:id" element={<Flower />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </FlowerProvider>
    );
}

export default App;
