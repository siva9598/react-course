import React from "react";
import Navbar from "./navbar"
import AppSection from "./appsection"
import CardSection from "./cardsection"
import Footer from "./footer"
import HeroSection from "./herosection"

const App = () => {
    return (<div>
        <Navbar/>
        <HeroSection/>
        <AppSection/>
        <CardSection/>
        <Footer/>
    </div>
    );
};

export default App;