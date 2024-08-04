import React from "react";
import Baguette from "../assets/baguette.png"
import Viennoiserie from "../assets/viennoiseries.png"
import Anniv from "../assets/anniversaire.png"
import Repas from "../assets/repas.png"
import Salade from "../assets/Salade.png"
import Mariage from "../assets/mariage.png"

const Data = [
{
    image: Baguette,
    title: "Du bon pain",
    description: "Chaque jour, notre pain est pétri et cuit avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
},
{
    image: Viennoiserie,
    title: "Nos délices",
    description: "Chaque jour, nos viennoiseries sont façonnées et cuites avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
},
{
    image: Anniv,
    title: "Nos gâteaux",
    description: "Chaque jour, nos pâtisseries sont confectionnées avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
},
{
    image: Repas,
    title: "De bons sandwichs",
    description: "Chaque jour, nos sandwichs sont préparés avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
},
{
    image: Salade,
    title: "Nos salades fraîches",
    description: "Chaque jour, nos salades sont préparées avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
},
{
    image: Mariage,
    title: "Vos commandes",
    description: "Chaque jour, vos commandes spéciales sont réalisées avec le plus grand soin, garantissant une qualité et une fraîcheur incomparables. Découvrez le goût authentique de notre savoir-faire artisanal."
},
]

const Section4 = () => {

    return (

        <div className="grid grid-cols-1 xl:grid-cols-3 h-full mt-32 sm:mt-48">
            {Data.map((item, index) => (
                <div className="flex flex-col items-center justify-center h-full w-auto bg-black p-12">
                    <img src={item.image} alt={item.title} className="sm:w-[70%] sm:h-[40%] object-cover rounded-lg" />
                    <h1 className=" text-3xl sm:text-6xl text-primary font-jost font-bold text-center mt-8">{item.title}</h1>
                    <p className="text-accent font-jost text-xl sm:text-2xl mt-12 font-semibold max-w-[60%] text-center">{item.description}</p>
                </div>
            ))}

        </div>
    )
}

export default Section4