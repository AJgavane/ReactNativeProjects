import React, { useState } from 'react'
import { Button } from 'react-native'
import '../styles/CounterScreen.css'

function CounterScreen() {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <h1> Counter Screen</h1>
            <div className="counter__button">
                <Button 
                    title="Increase"
                    onPress={() => {
                        setCount(count+1);
                    }}
                />
            </div>
            <div className="counter__button">
                <Button 
                    title="Decrease"
                    onPress = {() => {
                        setCount(count-1);
                    }}
                />
            </div>
            <h1>Counter: {count} </h1>
        </div>
    )
}

export default CounterScreen
