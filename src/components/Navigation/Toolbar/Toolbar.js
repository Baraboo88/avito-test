import React from 'react'
import styles from './Toolbar.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import {Link} from "react-router-dom";

const toolbar = () => (

    <header className={styles.Toolbar}>

        <div className={styles.Logo}>
            <Link to={'/'}> <Logo/></Link>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;