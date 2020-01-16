import React, { useEffect, useState } from "react";
import styles from "./AdDetails.module.css";
import { Link } from "react-router-dom";
import Gallery from "./Gallery/Gallery";

const AdDetails = ({ id }) => {
  const [adsDetails, setAds] = useState([{ isFetching: false }]);
  useEffect(() => {
    getAds();
  }, []);

  const getAds = async () => {
    const response = await fetch(`http://134.209.138.34/item/${id}`);
    const data = await response.json();
    setAds(data[0]);
  };

  return (
    <div className={styles.ad}>
      <h1>{adsDetails.title}</h1>
      <Gallery images={adsDetails.images} />
      <h3>Адрес:</h3>
      <p>{adsDetails.address}</p>
      <h3>Описание:</h3>
      <p>{adsDetails.description}</p>
      <h3>Продавец:</h3>
      <p>{adsDetails.sellerName}</p>
      <h3>Цена:</h3>
      <p className={styles.adPrice}>{adsDetails.price}</p>

      <Link to={`/`}>Назад</Link>
    </div>
  );
};

export default AdDetails;
