import React from 'react';
import Link from 'next/link'
import styles from './Navbar.module.css'
import data from "../assets/data/recettes.json"


const Navbar = () => {

    const list = data.recettes
   
    const platsNb = list.filter(item => item.type === "plat").length
    const soupesNb = list.filter(item => item.type === "soupe").length
    const dessertsNb = list.filter(item => item.type === "dessert").length

    return (
        <div className={styles.navbar}>
            <div className={styles.navbarItems}>
                <Link href="/" className="hidden md:block text-[#f78410]">
                    Home
                </Link>
                <Link href="/plats">
                    Plats <span className="hidden md:inline text-base">({platsNb})</span>
                </Link>
                <Link href="/soupes">
                    Soupes <span className="hidden md:inline text-base">({soupesNb})</span>
                </Link>
                <Link href="/desserts">
                    Desserts <span className="hidden md:inline text-base">({dessertsNb})</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;