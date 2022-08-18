import { useParams } from "react-router-dom";

export default function Flower() {
    const { id } = useParams();
    return <div>Flower {id}</div>;
}
