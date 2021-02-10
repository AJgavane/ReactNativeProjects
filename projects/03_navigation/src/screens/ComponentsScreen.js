import React from 'react'
import '../styles/ComponentsScreen.css'

function ComponentsScreen() {
    const name ="Ajinkya";
    return (
        <div className="components__container">
            <h1>Welcome to the ComponentsScreen</h1>
            <p>{name}</p>
        </div>
    )
}

export default ComponentsScreen
