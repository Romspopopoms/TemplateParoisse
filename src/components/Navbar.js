import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logoparoisse.png"

const Data = [
    {
        name: "ACCUEIL",
        link: "#section1"
    },
    {
        name: "VIVRE SA FOI",
        link: "#section2"
    },
    {
        name: "JEUNES",
        link: "#section3"
    },
    {
        name: "PASTORALES",
        link: "#section4"
    },
    {
        name: "SACREMENTS",
        link: "#section5"
    },
    {
        name: "L'EQUIPE PASTORALE",
        link: "#section6"
    }
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 w-full h-16 flex items-center z-50 bg-[#54B9BC] md:bg-transparent">
            <a href="/" className="ml-6">
                <img src={Logo} alt="logo" className="h-8 md:h-12" />
            </a>
            <nav className="ml-8 flex items-center">
                <div className="hidden md:flex items-center space-x-4 ">
                    {Data.map((item, index) => (
                        <a 
                            key={index}
                            href={item.link}
                            className="text-[#FFFFFF] font-jost text-sm font-semibold"
                        >
                            {item.name}
                        </a>
                    ))}
                    
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="absolute top-4 right-8 text-white text-3xl focus:outline-none">
                        <FiMenu />
                    </button>
                </div>
            </nav>
            {menuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#54B9BC] flex flex-col items-center shadow-md">
                    {Data.map((item, index) => (
                        <a 
                            key={index}
                            href={item.link}
                            onClick={() => setMenuOpen(false)}
                            className="text-[#591527] font-jost text-sm py-2"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
                        <div className="hidden bg-[#54B9BC] size-20 md:absolute -top-10 -right-10 rotate-45"></div>

        </motion.div>
    );
};

export default Navbar;
