import React from 'react'
import '../styles/ComponentsScreen.css'

function ComponentsScreen() {
    const userName = "Ajinkya";
    return (
        <div className="components__container">
            <h1>Getting Started with React Native</h1>
            <p>My name is {userName}</p>
        </div>
    )
}

export default ComponentsScreen
