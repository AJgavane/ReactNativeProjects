import React from 'react'
import { View } from 'react-native'

function ColorBox({colorValue}) {
    return (
        <div className="colorbox">
            <p>{colorValue}</p>
            <View 
                style={{height:100, width:100, backgroundColor:colorValue}}
            />
        </div>
    )
}

export default ColorBox
