import { Link } from 'react-router-dom';

export default function HomeHero() {
    return (
        <div className="home-hero">
            <div className="home-hero-content">
                <div className="home-hero-content-title">
                    Flowers, 🌻
                    <br /> what the world needs
                </div>
                <div className="home-hero-content-dec">
                    Browse between hounders of flowers
                </div>
                <Link to="/shop">
                    <button className="btn btn-prime">Browse</button>
                </Link>
            </div>
            <div className="home-hero-slider">
                <div className="home-hero-slider-img">
                    <img
                        src="https://images.unsplash.com/photo-1455582916367-25f75bfc6710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=827&q=80"
                        alt=""
                    />
                </div>
                <div className="home-hero-slider-img">
                    <img
                        src="https://images.unsplash.com/photo-1560790671-b76ca4de55ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
                        alt=""
                    />
                </div>
                <div className="home-hero-slider-img">
                    <img
                        src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                        alt=""
                    />
                </div>
                <div className="home-hero-slider-img">
                    <img
                        src="https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                    />
                </div>
                <div className="home-hero-slider-img">
                    <img
                        src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                        alt=""
                    />
                </div>
                <div className="home-hero-slider-img">
                    <img
                        src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
