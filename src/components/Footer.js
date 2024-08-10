import React from "react";
import BG from "../assets/back paroisse.png";
import Logo from "../assets/logoparoisse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="relative flex">
            <img src={BG} alt='background' className="object-cover h-auto md:h-64 w-full" />
            <div className="md:grid md:grid-cols-2 flex flex-col w-full absolute inset-0 p-4">
                <div className="flex flex-col gap-2">
                    <img src={Logo} alt="Logo" className="max-w-[20%]" />
                    <p className="text-white font-kanit font-thin text-sm">
                        Paroisse Saint-Athanase d'Alexandrie<br />
                        de Provence,<br />
                        12 rue du ciel,<br />
                        83999 LaBelleVilleCatholique
                    </p>
                    <div className="hidden md:block mt-12">
                        <h1 className="font-inter text-[#E6E6E6]">© SynergieInnovation 2024</h1>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-12 md:mt-0 items-center md:items-end">
                    <div className="flex flex-row space-x-4  md:space-y-0 items-center">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" className="text-white" />
                        </a>
                    </div>
                    <p className="text-white font-kanit font-thin text-sm mt-3 text-center md:text-left">
                        04 05 06 07 08<br />
                        contact@paroissestathanaseap.fr
                    </p>
                    <div className="md:hidden mt-8">
                        <h1 className="font-inter text-[#E6E6E6]">© SynergieInnovation 2024</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
