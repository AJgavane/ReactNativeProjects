import React from 'react'
import "../styles/ImageDetails.css"


function ImageDetails({ imgName, imgSrc }) {
    return (
        <div className="imagedetails__container">
            <img src={imgSrc} />
            <p>ImageName: {imgName}</p>
        </div>
    )
}

export default ImageDetails
