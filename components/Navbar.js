import React from 'react';
import Link from 'next/link'
import styles from './Navbar.module.css'


const Navbar = ({platsNb, dessertsNb, soupeNb}) => {

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
                    Soupes <span className="hidden md:inline text-base">({soupeNb})</span>
                </Link>
                <Link href="/desserts">
                    Desserts <span className="hidden md:inline text-base">({dessertsNb})</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;