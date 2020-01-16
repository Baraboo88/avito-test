import React from 'react';
import townLogo from '../../assets/images/town.svg'
import styles from './Logo.module.css'

const logo = () =>(
    <div className={styles.Logo}>
        <img src={townLogo} alt="TownLogo"/>
    </div>
);

export default logo;