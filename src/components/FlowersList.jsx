import Flower from "./FlowerItem";
import { useContext } from "react";
import FlowerContext from "../context/FlowerContext";

export default function FlowersList() {
    const { flowers } = useContext(FlowerContext);

    if (!flowers) {
        return <div>Not flower found</div>;
    }

    return (
        <main>
            {flowers.map((flower) => (
                <Flower key={flower.id} flower={flower} />
            ))}
        </main>
    );
}
