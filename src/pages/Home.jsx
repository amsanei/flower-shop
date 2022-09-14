import React, { Component } from "react";
import Header from "../components/layout/Header";
import HomeHero from "../components/layout/HomeHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/layout/Footer";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeHero />
                <div className="home-section">
                    <div className="home-section-title">Popular Flowers</div>
                    <div className="home-section-content">
                        <div className="card-product">
                            <div className="card-product-img">
                                <img
                                    src="https://images.unsplash.com/photo-1563601841845-74a0a8ab7c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt="Daisy image"
                                />
                            </div>
                            <div className="card-product-title">daisy</div>
                            <div className="card-product-footer">
                                <div className="card-product-price">5$</div>
                                <div className="card-product-add-to-cart">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    Add to cart
                                </div>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-product-img">
                                <img
                                    src="https://images.unsplash.com/photo-1593026238161-ac5f86e5ef79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                    alt="sun flower image"
                                />
                            </div>
                            <div className="card-product-title">Sun flower</div>
                            <div className="card-product-footer">
                                <div className="card-product-price">5$</div>
                                <div className="card-product-add-to-cart">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    Add to cart
                                </div>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-product-img">
                                <img
                                    src="https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
                                    alt="white rose image"
                                />
                            </div>
                            <div className="card-product-title">White rose</div>
                            <div className="card-product-footer">
                                <div className="card-product-price">5$</div>
                                <div className="card-product-add-to-cart">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    Add to cart
                                </div>
                            </div>
                        </div>
                        <div className="card-product">
                            <div className="card-product-img">
                                <img
                                    src="https://images.unsplash.com/photo-1632918736641-446a9159c258?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyaXdpbmtsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="Periwinkle image"
                                />
                            </div>
                            <div className="card-product-title">Periwinkle</div>
                            <div className="card-product-footer">
                                <div className="card-product-price">5$</div>
                                <div className="card-product-add-to-cart">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    Add to cart
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-section">
                    <div className="home-section-title">Testimonials</div>
                    <div className="home-section-content">
                        <div className="card-testimonial">
                            <div>
                                <img
                                    className="card-testimonial-img"
                                    src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="card-testimonial-content">
                                <div className="card-testimonial-name">
                                    Atena
                                </div>
                                <div className="card-testimonial-text">
                                    i’m buying flower from them every weak,
                                    always fresh flowers and beutiful😍🌻...
                                    love’em so nuch..keep going 💯💯
                                </div>

                                <div className="card-testimonial-rate">
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div className="card-testimonial">
                            <div>
                                <img
                                    className="card-testimonial-img"
                                    src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="card-testimonial-content">
                                <div className="card-testimonial-name">
                                    Atena
                                </div>
                                <div className="card-testimonial-text">
                                    i’m buying flower from them every weak,
                                    always fresh flowers and beutiful😍🌻...
                                    love’em so nuch..keep going 💯💯
                                </div>

                                <div className="card-testimonial-rate">
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                        <div className="card-testimonial">
                            <div>
                                <img
                                    className="card-testimonial-img"
                                    src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="card-testimonial-content">
                                <div className="card-testimonial-name">
                                    Atena
                                </div>
                                <div className="card-testimonial-text">
                                    i’m buying flower from them every weak,
                                    always fresh flowers and beutiful😍🌻...
                                    love’em so nuch..keep going 💯💯
                                </div>

                                <div className="card-testimonial-rate">
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <span className="active">
                                        <FontAwesomeIcon icon={faStar} />
                                    </span>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
