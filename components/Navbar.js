import React from 'react';
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarItems}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/listes">
                    Recettes
                </Link>
            </div>
        </div>
    );
};

export default Navbar;