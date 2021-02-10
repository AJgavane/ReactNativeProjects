import React from 'react'
import '../styles/ComponentsScreen.css'

function ComponentsScreen() {
    const userName = "Ajinkya";
    return (
        <div className="components__container">
            <h1>ComponentsScreen</h1>
            <h2>Getting Started with React Native</h2>
            <p>My name is {userName}</p>
        </div>
    )
}

export default ComponentsScreen
