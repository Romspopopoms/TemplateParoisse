import React from "react";
import Enfants from "../assets/enfants.png";
import Ado from "../assets/ado.png";
import Jeunepro from "../assets/jeunepro.png";

const Section6 = () => {
    return (
        <div className="mt-8 mb-20">
            <h1 className="text-2xl md:text-6xl font-kanit font-bold text-primary text-center ">NOS PASTORALES POUR LES JEUNES</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 px-20 gap-6 md:gap-8 mt-8 md:mt-16">
                <div className="relative flex flex-col items-center justify-center w-full h-64 md:h-80">
                    <img src={Enfants} alt='enfants' className="w-full h-full object-cover brightness-50 rounded-lg" />
                    <h1 className="absolute text-2xl md:text-5xl font-kanit font-bold text-white text-center">ENFANTS</h1>
                </div>
                <div className="relative flex flex-col items-center justify-center w-full h-64 md:h-80">
                    <img src={Ado} alt='Ado' className="w-full h-full object-cover brightness-50 rounded-lg" />
                    <h2 className="absolute text-2xl md:text-5xl font-kanit font-bold text-white text-center">ADOS</h2>
                </div>
                <div className="relative flex flex-col items-center justify-center w-full h-64 md:h-80">
                    <img src={Jeunepro} alt='jeune pro' className="w-full h-full object-cover brightness-50 rounded-lg" />
                    <h3 className="absolute text-2xl md:text-5xl font-kanit font-bold text-white text-center">JEUNES PRO</h3>
                </div>
            </div>
        </div>
    );
};

export default Section6;
