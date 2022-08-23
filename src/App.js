import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flower from "./pages/Flower";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import { UserProvider } from "./context/UserContext";
import { FlowerProvider } from "./context/FlowerContext";
import { CartProvider } from "./context/CartContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import UserPanel from "./pages/UserPanel";
import { SalesProvider } from "./context/SalesContext";
import UserShopHistory from './pages/UserShopHistory';
function App() {
    return (
        <UserProvider>
            <FlowerProvider>
                <SalesProvider>
                    <CartProvider>
                        <Router>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/flower/:id"
                                    element={<Flower />}
                                />
                                <Route
                                    path="/checkout"
                                    element={<Checkout />}
                                />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/user-panel"
                                    element={<PrivateRoute />}
                                >
                                    <Route
                                        path="/user-panel"
                                        element={<UserPanel />}
                                    />
                                    <Route
                                        path="/user-panel/shop-history"
                                        element={<UserShopHistory />}
                                    />
                                </Route>
                            </Routes>
                        </Router>
                    </CartProvider>
                </SalesProvider>
            </FlowerProvider>
        </UserProvider>
    );
}

export default App;
