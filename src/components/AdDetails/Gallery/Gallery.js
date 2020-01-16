import React from "react";
import ImageGallery from 'react-image-gallery';
import './Gallery.css';
import Auxil from "../../UI/Auxil/Auxil";

const gallery = ({images}) => {
    let formattedImgs = []
    if(images) {
        formattedImgs = images.map((img) => Object.assign({}, {original: img}))
    }
    return(
            <Auxil>
            {images ?  <ImageGallery items={formattedImgs} showThumbnails = {false}/> : <div>Loading...</div>}
            </Auxil>
        )
};

export default gallery;