import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "/" + mm + "/" + dd;

    const [salesHistory, setSalesHistory] = useState([
        {
            id: "",
            userId: "",
            products: [],
            date: Date,
            state: "",
        },
    ]);

    const newSale = (info) => {
        setSalesHistory([
            ...salesHistory,
            {
                id: uuidv4(),
                userId: info.userId,
                products: info.products,
                date: today,
                state: "registered",
            },
        ]);
    };

    const getUserShopHistory = (userId) => {
        return salesHistory.filter((item) => item.userId === userId);
    };

    return (
        <SalesContext.Provider value={{ getUserShopHistory, newSale }}>
            {children}
        </SalesContext.Provider>
    );
};

export default SalesContext;
