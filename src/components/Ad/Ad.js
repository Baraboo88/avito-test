import React from "react";
import styles from "./Ad.module.css";
import { Link } from "react-router-dom";

const ad = ({ title, address, price, image, id }) => {

  return (
    <Link to={`/${id}`}>
      <div className={styles.ad}>
        <div className={styles.adData}>
          <h1>{title}</h1>
          <p>{address}</p>
          <p className={styles.adPrice}>{price}</p>
        </div>
        <img className={styles.adImage} src={image} alt="" />
      </div>
    </Link>
  );
};

export default ad;
