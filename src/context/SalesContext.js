import { createContext, useState } from "react";

const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
    const [salesHistory, setSalesHistory] = useState([
        {
            userId: "1a2a1a",
            products: [{ id: "agww32", count: 1 }],
            timeStamp: "2022/24/8",
        },
    ]);

    return (
        <SalesContext.Provider value={{ salesHistory }}>
            {children}
        </SalesContext.Provider>
    );
};

export default SalesContext;
