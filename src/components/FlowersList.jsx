import Flower from "./Flower";
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
                <Flower flower={flower} />
            ))}
        </main>
    );
}
