import Flower from "./Flower";

export default function FlowersList() {
    const flowers = [
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
