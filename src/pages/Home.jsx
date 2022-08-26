import React, { Component } from "react";
import Header from "../components/ui/Header";
import HomeHero from "../components/ui/HomeHero";

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
