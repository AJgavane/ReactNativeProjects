import React from 'react'
import '../styles/ImageScreen.css'
import ImageDetails from '../components/ImageDetails'

function ImageScreen() {
    return (
        <div className="imagescreen__container">
            <h1>Image Screen</h1>
            <ImageDetails 
                imgName ="Forest"
                imgSrc = {require("../../assets/forest.jpg")}
                score = "8"
            />
            <ImageDetails 
                imgName ="Beach"
                imgSrc = {require("../../assets/beach.jpg")}
                score = "10"
            />
            <ImageDetails 
                imgName ="Mountain"
                imgSrc = {require("../../assets/mountain.jpg")}
                score = "9"
            />
        </div>
    )
}

export default ImageScreen
