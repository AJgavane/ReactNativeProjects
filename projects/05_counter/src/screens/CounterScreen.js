import React, {useState} from 'react'
import { Button } from 'react-native'
import '../styles/CounterScreen.css'

function CounterScreen() {
    // won't magically detect if a variable is changed, so we need
    // to use state which will do that magic for us
    const [counter, setCounter] = useState(0);
    // we are never going to update the counter directly
    
    return (
        <div className="counter__container">
            <h1>Counter Screen</h1>
            <div className="counter__button">
                <Button
                    title="Increase"
                    onPress={() => {
                        // counter++; <-- don't do this
                        setCounter(counter + 1);
                    }}
                />
            </div>
            <div className="counter__button">
                <Button
                    title="Decrease"
                    onPress={()=>{
                        setCounter(counter - 1);
                    }}
                />
            </div>
            <div className="counter__count">
                <div className="counter__count__heading">
                 Current Count: {counter}
                </div>
            </div>
        </div>
    )
}

export default CounterScreen
