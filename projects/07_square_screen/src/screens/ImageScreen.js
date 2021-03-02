import React from 'react'
import ImageDetails from '../components/ImageDetails'
import '../styles/ImageScreen.css'

function ImageScreen() {
    return (
        <div className="image">
            <h1>Image Screen</h1>
            <div className="image__details">
                <ImageDetails 
                    imgName="beach"
                    imgSrc={require("../../assets/beach.jpg")}
                />
            </div>
            <div className="image__details">
                <ImageDetails 
                    imgName="mountain"
                    imgSrc={require("../../assets/mountain.jpg")}
                />
            </div><div className="image__details">
                <ImageDetails 
                    imgName="forest"
                    imgSrc={require("../../assets/forest.jpg")}
                />
            </div>
        </div>
    )
}

export default ImageScreen
