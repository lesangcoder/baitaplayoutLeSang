import React from "react";
import Navbar from "./navbar";
import Body from "./body";
import Footer from "./footer";

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Body />
                <Footer />
            </div>
        );
    }
}
