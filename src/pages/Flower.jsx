import { useContext } from "react";
import FlowerContext from "../context/FlowerContext";
import { useParams } from "react-router-dom";
import FlowerItem from "../components/FlowerItem";

export default function Flower() {
    const { id } = useParams();
    const { getFlower } = useContext(FlowerContext);
    const flower = getFlower(id);
    console.log(flower);
    return (
        <div>
            <FlowerItem flower={flower} />
        </div>
    );
}
