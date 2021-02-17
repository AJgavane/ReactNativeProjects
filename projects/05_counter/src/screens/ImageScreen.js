import React from 'react'
import ImageDetails from '../components/ImageDetails'
import "../styles/ImageScreen.css"

function ImageScreen() {
    return (
        <div className="image__container">
            <h1>Image Screen</h1>
            <ImageDetails 
                imgName="Forest"
                imgSrc={require("../../assets/forest.jpg")}
            />
            <ImageDetails 
                imgName="Beach"
                imgSrc={require("../../assets/beach.jpg")}
            />
            <ImageDetails 
                imgName="Mountain"
                imgSrc={require("../../assets/mountain.jpg")}
            />
        </div>
    )
}

export default ImageScreen
