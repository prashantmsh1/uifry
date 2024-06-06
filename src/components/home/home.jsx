import React from "react";
import Navbar from "../navbar/navbar";
import Hero from "../hero/hero";
import Features from "../features/index";
import Advantages from "../features/advantages";
import Faq from "../features/faq";
const Home = () => {
    return (
        <div className=" bg-[white] font-play overflow-y-hidden">
            <Navbar />
            <Hero />
            <Features />
            <Faq />
        </div>
    );
};

export default Home;
