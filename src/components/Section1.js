import React from "react";
import background from "../assets/bgSection1.png";
import Pointille from "../assets/Pointillé.png";

const Section1 = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen w-full z-0 mt-16 md:mt-0">
            <img src={background} alt="fond" className="h-full w-full object-cover brightness-50" />
            <img src={Pointille} alt="pointillé" className="absolute left-0 object-cover w-[90%] h-[40%] " />
            <div className="absolute left-8 md:left-16 flex flex-col items-start justify-center px-4">
                <h1 className="font-bold text-white text-3xl md:text-4xl text-start mb-4">BIENVENUE DANS VOTRE PAROISSE !</h1>
                <div className="hidden md:flex flex-row gap-4 mt-4">
                    <button className="bg-white text-[#54B9BC] p-2 md:px-4 rounded-lg font-bold">Horaires des Messes</button>
                    <button className="bg-white text-[#54B9BC] p-2 md:px-4 rounded-lg font-bold">Inscription au Patronage</button>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 md:hidden absolute bottom-16">
                <button className="bg-white text-[#54B9BC] p-2 rounded-lg font-bold">Horaires des Messes</button>
                <button className="bg-white text-[#54B9BC] p-2 rounded-lg font-bold">Inscription au Patronage</button>
            </div>
        </div>
    );
};

export default Section1;
