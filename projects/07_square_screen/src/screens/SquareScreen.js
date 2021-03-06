import React, { useState } from 'react'
import ColorBox from '../components/ColorBox';
import ColorCounter from '../components/ColorCounter'

import '../styles/SquareScreen.css'

/**
 *                  SquareScreen        -- This needs to read the three diff state values
 *           ___________|________________
 *          /           |                \      
 *      (red)         (green)         (blue)          -- THis need to change the three diff state values
 *   ColorCounter   ColorCounter    ColorCounter
 * 
 *      Two options. Where to maintain the states?? 
 *  Generally, we create state variables in the most parent component that needs to either read or change a state value.
 *  Thus, we are going to create the state variables in the SquareScreen. And then pass the values to the ColorCounter 
 *  as a prop if the ColorCounter needed to use these value : {colorValue: red}.
 *  We need our child component to change the state value. In this case, we don't pass the state var as propbs, but a callback
 *  function to change the state value as a prop  : {onChange: () => {}}
 * 
 */


const COLOR_INCREMENT = 10;
function SquareScreen() {
    const [red, setRed]     = useState(100);
    const [green, setGreen] = useState(20);
    const [blue, setBlue]   = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === amount by which we would like to change the color. +/- 10
        switch(color){
            case 'red':
                (red + change > 255 || red + change < 0)     ? null : setRed(red + change);
                return;
            case 'green':
                (green + change > 255 || green + change < 0) ? null : setGreen(green + change);
                return;
            case 'blue' :
                (blue + change > 255 || blue + change < 0)   ? null : setBlue(blue + change);
                return;
            default :
                return;
        }
    };

    return (
        <div className="square__container">
            <div className="square__container__header">
                <h1> Square Screen </h1>
            </div>
            <div className="square__container__color">
                <ColorCounter 
                    color="Red"
                    onIncrease={() => setColor('red', COLOR_INCREMENT)}
                    onDecrease={() => setColor('red', -1*COLOR_INCREMENT)}
                />
            </div>
            <div className="square__container__color">
                <ColorCounter 
                    color="Green"
                    onIncrease={() => setColor('green', COLOR_INCREMENT)}
                    onDecrease={() => setColor('green', -1*COLOR_INCREMENT)}
                />
            </div>
            <div className="square__container__color">
                <ColorCounter 
                    color="Blue"
                    onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                    onDecrease={() => setColor('blue',-1 * COLOR_INCREMENT)}
                />
            </div>
            <div className="square__container__colorviewer">
                <ColorBox 
                    colorValue={`rgb(${red}, ${green}, ${blue})`}
                />
            </div>
           
        </div>
    )
}

export default SquareScreen
