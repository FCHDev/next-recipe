import React from 'react';
import Navbar from "./Navbar";
import {recettes} from "../assets/data/recettes.json"

const Container = ({children}) => {
    const platsNb = recettes.filter(recette => recette.type === "plat").length
    const soupesNb = recettes.filter(recette => recette.type === "soupe").length
    const dessertsNb = recettes.filter(recette => recette.type === "dessert").length

    return (
        <div style={{overflow: "hidden"}}>
            <Navbar
                platsNb={platsNb}
                soupeNb={soupesNb}
                dessertsNb={dessertsNb}/>
            {children}
        </div>
    );
};

export default Container;