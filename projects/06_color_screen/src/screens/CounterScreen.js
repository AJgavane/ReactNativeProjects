import React, {useState} from 'react'
import { Button } from 'react-native'
import '../styles/CounterScreen.css'

function CounterScreen() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="counter__container">
            <h1>Counter Screen</h1>
            <div className="counter__container__buttons">
                <Button 
                    title="Increase"
                    onPress={() => {
                        setCounter(counter + 1)
                    }}
                />
            </div>
            <div className="counter__container__buttons">
                <Button 
                    title="Decrease"
                    onPress={() => {
                        setCounter(counter - 1)
                    }}
                />
            </div>
            <div className="counter__container__text">
                <p>Current Count: {counter}</p>
            </div>
        </div>
    )
}

export default CounterScreen
