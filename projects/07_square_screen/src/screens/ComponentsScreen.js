import React from 'react'
import '../styles/ComponentsScreen.css'

function ComponentsScreen() {
    const userName = "Ajinkya"
    return (
        <div className="components__container">
            <h1>Component Screen</h1>
            <p>Hey {userName}! Welcome to React-Native</p>
        </div>
    )
}

export default ComponentsScreen
