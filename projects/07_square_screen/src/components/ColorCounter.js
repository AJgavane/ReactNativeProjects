import React from 'react'
import { Button } from 'react-native'
import './ColorCounter.css'

function ColorCounter({color, onIncrease, onDecrease}) {
    return (
        <div className="colorcounter__container">
            <h2>{color}</h2>
            <div className="colorcounter__container__button">
                <Button 
                    title={`Increase ${color}`} 
                    onPress={() => onIncrease() }
                />
            </div>
            <div className="colorcounter__container__button">
                <Button 
                    title={`Decrease ${color}`}
                    onPress={() => onDecrease() }
                />
            </div>
        </div>
    )
}

export default ColorCounter
