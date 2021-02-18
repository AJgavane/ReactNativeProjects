import React from 'react'
import '../styles/ImageDetails.css'

function ImageDetails({ imageName, imageSrc }) {
    return (
        <div className="imagedetails__container">
            <img src={imageSrc}/>
            <p>{imageName}</p>
        </div>
    )
}

export default ImageDetails
