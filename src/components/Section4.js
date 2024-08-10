import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt, faHandsPraying } from '@fortawesome/free-solid-svg-icons';

const Section4 = () => {
    return (
        <div className="mt-8 mb-20">
        <h1 className="text-2xl md:text-6xl font-kanit font-bold text-primary text-center ">QUE POUVONS-NOUS FAIRE POUR VOUS ?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col gap-y-6 items-center justify-center mt-16">
            <div className="size-48 lg:size-80 bg-[#8BA2E0] rounded-full relative">
            <FontAwesomeIcon icon={faHandsPraying} className="size-16 lg:size-28 absolute top-[35%] left-[33%]" />
            </div>
            <button className="py-2 px-4 font-semibold font-kanit text-white bg-[#394040] rounded-lg">Intention de prière</button>

        </div>
        <div className="flex flex-col gap-y-6 items-center justify-center mt-16">
            <div className="size-48 lg:size-80 bg-[#A7CCAD] rounded-full relative">
            <FontAwesomeIcon icon={faCalendar} className="size-16 lg:size-28 absolute top-[35%] left-[33%]" />
            </div>
            <button className="py-2 px-4 font-semibold font-kanit text-white bg-[#394040] rounded-lg">Prendre un rendez-vous</button>

        </div>
        <div className="flex flex-col gap-y-6 items-center justify-center mt-16">
            <div className="size-48 lg:size-80 bg-[#F09878] rounded-full relative">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="size-16 lg:size-28 absolute top-[35%] left-[33%]" />
            </div>
            <button className="py-2 px-4 font-semibold font-kanit text-white bg-[#394040] rounded-lg">Visiter l'église</button>

        </div>
        </div>
        </div>
    );
};

export default Section4;
