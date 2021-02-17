import React from 'react'
import { FlatList } from 'react-native';
import "../styles/ListScreen.css"

function ListScreen() {
    const friends = [
        {name:"friend1", age:"10"},
        {name:"friend2", age:"10"},
        {name:"friend3", age:"10"},
        {name:"friend4", age:"10"},
        {name:"friend5", age:"10"},
        {name:"friend6", age:"10"},
        {name:"friend7", age:"10"},
    ];
    return (
        <div className="list__container">
            <h1>List Screen</h1>
            <FlatList 
                keyExtractor = {(friend) => friend.name}
                data = {friends}
                renderItem={({item}) => {
                    return (
                        <p> Name: {item.name} & Age: {item.age} </p>
                    );
                }}
            />
        </div>
    )
}

export default ListScreen
