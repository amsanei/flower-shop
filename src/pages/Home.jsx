import React, { Component } from "react";
import Header from "../components/layout/Header";
import HomeHero from "../components/layout/HomeHero";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeHero />
            </div>
        );
    }
}
