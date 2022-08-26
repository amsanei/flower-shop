import React, { Component } from "react";
import Header from '../components/ui/Header';
import FlowersList from './../components/FlowersList';


export default class Home extends Component {
    render() {
        return <div>
            <Header />
            <FlowersList/>
        </div>;
    }
}
