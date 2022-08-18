import { createContext, useState, useEffect } from "react";

const FlowerContext = createContext();

const flowers_data = [
    {
        id: "ag78uy",
        imgUrl: "notFound",
        name: "Sun Flower",
        Price: 2000,
        inStock: 5,
        description:
            "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
    },
    {
        id: "ie96qo",
        imgUrl: "notFound",
        name: "Daisy",
        Price: 1000,
        inStock: 5,
        description:
            "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
    },
    {
        id: "agww32",
        imgUrl: "notFound",
        name: "Rose",
        Price: 2000,
        inStock: 8,
        description:
            "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
    },
];

export const FlowerProvider = ({ children }) => {
    const [flowers, setFlowers] = useState([]);

    useEffect(() => {
        setFlowers(flowers_data);
    }, []);

    const getFlower = (id) => {
        return flowers.filter((element) => element.id === id)[0];
    };

    return (
        <FlowerContext.Provider
            value={{
                flowers,
                getFlower,
            }}
        >
            {children}
        </FlowerContext.Provider>
    );
};

export default FlowerContext;