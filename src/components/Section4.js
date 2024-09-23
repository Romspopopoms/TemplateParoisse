import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt, faHandsPraying } from '@fortawesome/free-solid-svg-icons';

const Section4 = () => {
    return (
        <div className="mt-8 mb-20">
        <h1 className="text-2xl md:text-6xl font-kanit font-bold text-primary text-center ">QUE POUVONS-NOUS FAIRE POUR VOUS ?</h1>
        <div className="flex flew-wrap w-1/4 mx-auto items-center justify-center space-x-12 ">
        <div className="flex flex-col gap-y-6 items-center justify-center mt-16">
        <div className="size-48 lg:size-80 bg-[#8BA2E0] rounded-full flex items-center justify-center relative">
            <FontAwesomeIcon icon={faHandsPraying} className="size-[60%] text-[#394040]" />
            </div>
            <button className="py-2 px-4 font-semibold font-kanit text-white bg-[#394040] rounded-lg">
            Intention de prière
            </button>



        </div>
        <div className="flex flex-col gap-y-6 items-center justify-center mt-16">
            <div className="size-48 lg:size-80 bg-[#A7CCAD] rounded-full flex items-center justify-center relative">
            <FontAwesomeIcon icon={faCalendar} className="size-[60%] text-[#394040]"/>
            </div>
            <button className="py-2 px-4 font-semibold font-kanit text-white bg-[#394040] rounded-lg">Prendre un rendez-vous</button>

        </div>
        <div className="flex flex-col gap-y-6 items-center justify-center mt-16">
            <div className="size-48 lg:size-80 bg-[#F09878] rounded-full flex items-center justify-center relative">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="size-[60%] text-[#394040]" />
            </div>
            <button className="py-2 px-4 font-semibold font-kanit text-white bg-[#394040] rounded-lg">Visiter l'église</button>

        </div>
        </div>
        </div>
    );
};

export default Section4;
