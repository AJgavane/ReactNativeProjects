import React from 'react'
import { View } from 'react-native'
import "../styles/ColorBox.css"

function ColorBox({colorValue}) {
    console.log(colorValue);
    return (
        <div className="color__container">
             <View 
                style={{height:100, width: 100, backgroundColor:colorValue}}
            />
        </div>
    )
}

export default ColorBox
