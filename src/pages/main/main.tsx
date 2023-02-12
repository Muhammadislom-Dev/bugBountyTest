import React from "react";
import Footer from "../../components/footer/footer";
import AboutUs from "./components/about-us";
import CommonQuestions from "./components/common-questions";
import Features from "./components/features";
import Header from "./components/header";
import Research from "./components/research";
import WhyUs from "./components/why-us";
import Navbar from "../../components/navbar";
import Authorized from "../../auth/authorized";

interface MainProps {
}

const Main: React.FC<MainProps> = () => (
    <>
        <Navbar/>
        <Header/>
        <AboutUs/>
        <Features/>
        <Research/>
        <WhyUs/>
        <CommonQuestions/>
        <Footer/>
    </>
);

export default Main;
