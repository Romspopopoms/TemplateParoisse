import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const Section2 = () => {
  const [Open, SetOpen] = useState(false);
  const [Open2, SetOpen2] = useState(false);
  const [Open3, SetOpen3] = useState(false);

  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 relative">
      <div className="border-l-[20vw] border-b-[15vh] md:border-l-[20vw] border-l-transparent md:border-b-[40vh]  border-b-primary absolute bottom-0 right-0 z-0"></div>
      <div className="flex flex-col py-8 space-y-8 items-center justify-center">
        <h1 className="mt-8 font-kanit text-primary font-bold text-3xl xl:text-5xl">
          JESUS VOUS ATTEND
        </h1>
        <p
          className="max-w-[60%] text-[#394040] font-kanit text-xl md:text-2xl whitespace-pre-line text-center"
          style={{ lineHeight: "1.8em" }}
        >
          Bienvenue dans notre paroisse catholique! Ici, Jésus vous attend avec
          amour et miséricorde. Nous sommes ravis de vous accueillir et de
          partager avec vous la richesse de notre foi. Que vous soyez ici pour
          une visite ou pour rester, sachez que vous êtes chez vous parmi nous.
          Participez à nos messes, nos sacrements et nos activités
          communautaires. Ensemble, grandissons dans la foi et l'amour de Dieu
          !
        </p>
      </div>
      <div className="mt-8 flex flex-col py-8 px-8 space-y-8 items-center md:items-start">
        <h2 className="font-kanit text-primary font-bold text-3xl xl:text-5xl text-center">
          UN LIEU POUR VIVRE SA FOI
        </h2>
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="flex flex-col w-full mt-12">
            <div
              className="flex min-w-[70%] space-x-6 items-start ml-8 cursor-pointer"
              onClick={() => SetOpen(!Open)}
            >
              <FontAwesomeIcon
                icon={Open ? faTimes : faPlus}
                className="size-6 text-[#394040] mt-1"
              />
              <h3 className="font-kanit text-primary text-2xl font-bold">
                Les Sacrements
              </h3>
            </div>
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                Open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-4 ml-20 max-w-[80%] text-left font-kanit text-xl text-[#394040]">
                Dans notre paroisse, vous pouvez vivre pleinement les
                sacrements, accompagnés d'une préparation adaptée pour chacun
                afin d'en saisir toute la richesse.
              </p>
            </div>
            <hr className="w-full border-gray-300 my-4" />
          </div>

          <div className="flex flex-col w-full">
            <div
              className="flex min-w-[70%] space-x-6 items-start ml-8 cursor-pointer"
              onClick={() => SetOpen2(!Open2)}
            >
              <FontAwesomeIcon
                icon={Open2 ? faTimes : faPlus}
                className="size-6 text-[#394040] mt-1"
              />
              <h4 className="font-kanit text-primary text-2xl font-bold">
                Une pastorale pour la jeunesse
              </h4>
            </div>
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                Open2 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-4 ml-20 max-w-[80%] text-left font-kanit text-xl text-[#394040]">
                Nous offrons de nombreuses activités pour les jeunes, telles que
                le service de messe, le catéchisme, le scoutisme, l'aumônerie et
                des camps d'été, pour les aider à grandir dans la foi et la
                communauté.
              </p>
            </div>
            <hr className="w-full border-gray-300 my-4" />
          </div>

          <div className="flex flex-col w-full z-10 relative">
            <div
              className="flex min-w-[70%] space-x-6 items-start ml-8 cursor-pointer"
              onClick={() => SetOpen3(!Open3)}
            >
              <FontAwesomeIcon
                icon={Open3 ? faTimes : faPlus}
                className="size-6 text-[#394040] mt-1"
              />
              <h5 className="font-kanit text-primary text-2xl font-bold z-10">
                Une vie communautaire
              </h5>
            </div>
            <div
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                Open3 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-4 ml-20 max-w-[80%] text-left font-kanit text-xl mb-12 text-[#394040]">
                Notre paroisse propose diverses activités pour tous, incluant
                des groupes de prière, des actions caritatives, des événements
                festifs et des formations spirituelles, permettant à chacun de
                s'impliquer et de trouver sa place dans une communauté
                accueillante et bienveillante.
              </p>
            </div>
          </div>
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
