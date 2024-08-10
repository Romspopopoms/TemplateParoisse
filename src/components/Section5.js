import React from "react";
import BAPTEME from "../assets/bapteme.png";

const Section5 = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full relative h-screen">
            <img 
                src={BAPTEME} 
                alt="Bapteme" 
                className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute top-[30%] w-full flex flex-col items-center px-4 gap-8">
                <h1 className="text-2xl md:text-6xl font-kanit font-bold text-white text-center">
                    LE BAPTEME COMME POINT DE DEPART
                </h1>
                <p className="mt-4 max-w-[90%] md:max-w-[70%] text-sm md:text-xl xl:text-2xl font-kanit text-[#C7D6D6] text-center">
                    Notre paroisse accueille avec joie toutes les familles souhaitant célébrer le sacrement du baptême. Nous vous invitons à venir partager ce moment unique et sacré dans notre église. Le baptême est une porte d'entrée dans la vie chrétienne, marquant le début d'un chemin de foi et de communauté. Nous vous accompagnons dans la préparation de cette étape importante, offrant soutien et conseils pour que ce sacrement soit vécu pleinement et sereinement. Rejoignez-nous pour célébrer le baptême de votre enfant et accueillir ensemble les grâces de Dieu.
                </p>
            </div>
        </div>
    );
};

export default Section5;
