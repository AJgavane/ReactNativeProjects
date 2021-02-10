import React from 'react'
import { FlatList } from 'react-native';
import '../styles/ListScreen.css'

function ListScreen() {
    const friends = [
        {name: "Friend1"},
        {name: "Friend2"},
        {name: "Friend3"},
        {name: "Friend4"},
        {name:"Friend5"},
        {name:"Friend6"},
        {name:"Friend7"},
    ];
    return (
        <div className="listscreen__container">
            <h1>List Screen</h1>
            <FlatList 
                keyExtractor={(friend)=>friend.name}
                data ={friends}
                renderItem={({ item }) => {
                    return (
                        <p>{item.name}</p>
                    );
                }}
            />
        </div>
    )
}

export default ListScreen
