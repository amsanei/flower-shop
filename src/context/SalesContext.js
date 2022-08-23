import { createContext, useState } from "react";

const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
    const [salesHistory, setSalesHistory] = useState([
        {
            userId: "1a2a1a",
            products: [{ id: "agww32", count: 1 }],
            date: "2022/24/8",
        },
    ]);

    const getUserShopHistory = (userId) => {
        return salesHistory.filter((item) => item.userId === userId);
    };

    return (
        <SalesContext.Provider value={{ getUserShopHistory }}>
            {children}
        </SalesContext.Provider>
    );
};

export default SalesContext;
