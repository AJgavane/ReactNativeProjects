import React, { useReducer } from 'react'
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
 *  REDUCER: 
 *      when to use: Pieces of states are extremely related, and there is a precise set of well known ways in which
 *      we update these values.
 *      Its a FunctionThatMangesChangesToAnObject   - Always called with two different objects. 
 *      Arg1: state object : {red:0, green:0, blue:0}
 *      Arg2: The update we want to make:  {colorToChange: 'red', amount:15} 
 *          The Arg2 looks quite similar to the setColor() function.
 *      2 Technalities: 1) We never change Arg1 directly, 2) Reducer must always return a value to be used as Arg1
 */


const COLOR_INCREMENT = 10;

// action : howToChangeStateObject (increase red, decrease blue, etc)
// reducer always return a new object to be used as our state.
const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number } 
    // action === {colorToChange: 'red' || 'green' || 'blue', amount: +/-15}

    // to change a state obj we rebuilt the entire object again
    switch(action.colorToChange){
        case 'red':
            // make a brand new object, initialize the object (...state), and make the change in the new obj
            return ( (state.red + action.amount > 255 || state.red + action.amount < 0) 
                ? state 
                : {...state, red: state.red + action.amount});   
        case 'green':
            return ((state.green + action.amount > 255 || state.green + action.amount < 0) 
                ? state 
                : {...state, green: state.green + action.amount});
        case 'blue':
            return ((state.blue + action.amount > 255 || state.blue + action.amount < 0) 
            ? state 
            : {...state, blue: state.blue + action.amount});
        default:
            return state;
    }
}

function SquareScreen() {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0 } );    // one object with all our states in it.
    // state === {red: 0, green: 0, blue: 0 } 
    // better name for dispatch === runMyReducer
    // dispatcher accepts argument - action
    const { red, green, blue } = state;

    return (
        <div className="square__container">
            <div className="square__container__header">
                <h1> Square Screen </h1>
            </div>
            <div className="square__container__color">
                <ColorCounter 
                    color="Red"
                    onIncrease={() => dispatch({ colorToChange: 'red', amount:COLOR_INCREMENT}) }
                    onDecrease={() => dispatch({ colorToChange: 'red', amount:-1*COLOR_INCREMENT })}
                />          </div>
            <div className="square__container__color">
                <ColorCounter 
                    color="Green"
                    onIncrease={() => dispatch({ colorToChange: 'green', amount:COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ colorToChange: 'green', amount:-1*COLOR_INCREMENT })}
                />          </div>
            <div className="square__container__color">
                <ColorCounter 
                    color="Blue"
                    onIncrease={() => dispatch({ colorToChange: 'blue', amount:COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ colorToChange: 'blue', amount:-1*COLOR_INCREMENT })}
                />          </div>
            <div className="square__container__colorviewer">
                <ColorBox 
                    colorValue={`rgb(${red}, ${green}, ${blue})`}
                />
            </div>
           
        </div>
    )
}

export default SquareScreen
