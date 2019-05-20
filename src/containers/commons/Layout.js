import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const BaseLayout = (props) => (
        <div className="homepage-container">
        <Nav/>
        {props.children}
        <Footer/>
        </div>
    );

export default BaseLayout;