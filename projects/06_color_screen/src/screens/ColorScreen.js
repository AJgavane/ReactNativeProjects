import React, {useState} from 'react'
import { Button, FlatList, View } from 'react-native'
import "../styles/ColorScreen.css"
import ColorBox from '../components/ColorBox';

function ColorScreen() {
    const [colors, setColors] = useState([]);
    console.log(colors);
    return (
        <div className="color__container">
            <h1>Color Screen</h1>
            <Button 
                title="Add A Color"
                onPress={() => {
                    setColors([...colors, randomRGB()]);
                }}
            />
            {/* Add boxes for each color in the list using flatlist */}
            <FlatList 
                horizontal
                keyExtractor={(item) => item}
                data={colors}
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