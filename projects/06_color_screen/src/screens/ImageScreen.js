import React from 'react'
import ImageDetails from '../components/ImageDetails'
import "../styles/ImageScreen.css"

function ImageScreen() {
    return (
        <div className="image__container">
            <h1>Image Screen</h1>
            <div className="image__container__details">
                <ImageDetails 
                    imageName="Forest"
                    imageSrc={require("../../assets/forest.jpg")}
                />
            </div>
            <div className="image__container__details">
                <ImageDetails 
                    imageName="Beach"
                    imageSrc={require("../../assets/beach.jpg")}
                />
            </div>
            <div className="image__container__details">
                <ImageDetails 
                    imageName="mountain"
                    imageSrc={require("../../assets/mountain.jpg")}
                />
            </div>
        </div>
    )
}

export default ImageScreen
