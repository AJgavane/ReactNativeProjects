import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import '../styles/ListScreen.css'

function ListScreen() {
    const friends = [
        {name:"friend#1", age:"10"},
        {name:"friend#2", age:"10"},
        {name:"friend#3", age:"10"},
        {name:"friend#4", age:"10"},
        {name:"friend#5", age:"10"},
        {name:"friend#6", age:"10"},
        {name:"friend#7", age:"10"},
    ];
    return (
        <div className="list__container">
            <h1>List Screen</h1>
            <FlatList 
                keyExtractor={(friend) => friend.name}
                data={friends}
                renderItem={({item}) => {
                    return (
                        <p> Name: {item.name}, Age: {item.age}</p>
                    );
                }}
            />
        </div>
    )
}

export default ListScreen
