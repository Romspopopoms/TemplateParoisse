import React, { useState, useEffect, useRef } from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Accueil = () => {
    const [navbarVisible, setNavbarVisible] = useState(false);
    const section1Ref = useRef(null);

    const handleScroll = () => {
        if (section1Ref.current) {
            const section1Bottom = section1Ref.current.getBoundingClientRect().bottom;
            setNavbarVisible(section1Bottom <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col bg-black">
            <Navbar isVisible={navbarVisible} />
            <div id="section1" ref={section1Ref}>
                <Section1 />
            </div>
            <div id="section2">
                <Section2 />
            </div>
            <div id="section3">
                <Section3 />
            </div>
            <div id="section4">
                <Section4 />
            </div>
            <div id="section5">
                <Section5 />
            </div>
            <Footer />
        </div>
    );
};

export default Accueil;
