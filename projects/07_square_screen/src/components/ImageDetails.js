import React from 'react'

function ImageDetails({imgName, imgSrc}) {
    return (
        <div className="imagedetails">
            <h2>{imgName}</h2>
            <img src={imgSrc} />
        </div>
    )
}

export default ImageDetails
