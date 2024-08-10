import React from "react";
import Eucharistie from "../assets/Eucharistie.png";

const Section3 = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full relative h-screen md:h-screen">
            <img 
                src={Eucharistie} 
                alt="Eucharistie" 
                className="w-full h-full object-cover brightness-50"
            />
            <h1 className="absolute top-[35%] text-2xl md:text-6xl font-kanit font-bold text-white text-center">
                VIVEZ L'EUCHARISTIE
            </h1>
            <p className="max-w-[70%] absolute md:top-[50%] top-[45%] text-center text-xl xl:text-2xl font-kanit text-white">Venez nous rejoindre à la messe, célébrée chaque jour dans notre paroisse. Nous vous accueillons avec joie pour partager ensemble la prière et la grâce divine.</p>
        </div>
    );
};

export default Section3;
