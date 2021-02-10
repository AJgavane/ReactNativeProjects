import React from 'react'
import '../styles/ImageDetails.css'

function ImageDetails({ imgName, imgSrc, score }) {
    return (
        <div className="imagedetails__container">
            <img src={imgSrc}/>
            <p>{imgName}</p>
            <p>Score = {score}</p>
        </div>
    )
}

export default ImageDetails
