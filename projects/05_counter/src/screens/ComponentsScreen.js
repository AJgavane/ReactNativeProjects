import React from 'react'
import "../styles/ComponentsScreen.css"

function ComponentsScreen() {
    const userName = "Ajinkya";
    return (
        <div className="components_container">
            <h1>Components Screen</h1>
            <p> {userName} welcome to the world of react native </p>
        </div>
    )
}

export default ComponentsScreen
