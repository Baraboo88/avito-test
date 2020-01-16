import React, {useEffect, useState} from 'react';
import Ad from "../../components/Ad/Ad";

const AddList = () => {


    const [adsList, setAds] = useState([]);

    useEffect( () => {
        getAds();
    }, [])

    const getAds = async () => {
        const response = await fetch(`http://134.209.138.34/items`);
        const data = await response.json();
        setAds(data);

    };


    return(
        <div>
            {adsList.map((ad) => <Ad key = {ad.id} title={ad.title} address={ad.address} price={ad.price} image={ad.previewImage} id = {ad.id} />)}
        </div>
    )



}

export default AddList