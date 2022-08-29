import { createContext, useState, useEffect } from "react";

const FlowerContext = createContext();

const flowers_data = [
    {
        id: "ie96qoqrqw",
        imgUrl: "https://images.unsplash.com/photo-1593026238161-ac5f86e5ef79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        name: "Sun Flower",
        Price: 2000,
        inStock: 5,
        description:
            "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
    },
    {
        id: "ie96qo",
        imgUrl: "https://images.unsplash.com/photo-1563601841845-74a0a8ab7c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        name: "Daisy",
        Price: 1000,
        inStock: 5,
        description:
            "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
    },
    {
        id: "agww32",
        imgUrl: "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        name: "White Rose",
        Price: 2000,
        inStock: 8,
        description:
            "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
    },
    {
        id: "agww3qwrwqrx2",
        imgUrl: "https://images.unsplash.com/photo-1632918736641-446a9159c258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyaXdpbmtsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        name: "Periwinkle",
        Price: 1000,
        inStock: 10,
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
