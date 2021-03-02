import React, { useState } from 'react'
import { Button, FlatList } from 'react-native'
import ColorBox from '../components/ColorBox';
import '../styles/ColorScreen.css'

function ColorScreen() {
    const [colors, setColors] = useState([]);
    console.log(colors);
    return (
        <div className="color__container">
            <h1>Color Screen</h1>
            <Button 
                title="Add Color"
                onPress={() => {
                    // generate random color and add to our list
                    setColors([...colors, randomRGB()]);
                }}
            />
            <FlatList 
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({item}) => {
                    return(
                        <ColorBox 
                            colorValue={item}
                        />
                    );
                }}
            />
        </div>
    )
}

const randomRGB = () => {
    const red =  Math.floor(Math.random() * 256);
    const green =  Math.floor(Math.random() * 256);
    const blue =  Math.floor(Math.random() * 256);

    return `rgb(${red}, ${blue}, ${green})`
}

export default ColorScreen
