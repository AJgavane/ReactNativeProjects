import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import '../styles/ListScreen.css'

/** FlatList Element
 * 1. Turns an array into a list of elements
 * 2. We are required to pass a "prop" of 'data' -- the array of data that 
 *      we are going to create a bunch of element out of
 * 3. Also required to pass in a 'renderItem' prop -- function that will 
 *      turn each individual item into an element
 * 4. In web version it's 'mapping' an array of data to build a list
 *      'FlatList' is better with React Native
 */

function ListScreen() {
    const friends = [
        {name: 'Friend #1', age: 1},
        {name: 'Friend #2', age: 2},
        {name: 'Friend #3', age: 3},
        {name: 'Friend #4', age: 4},
        {name: 'Friend #5', age: 5},
        {name: 'Friend #6', age: 6},
        {name: 'Friend #7', age: 7},
        {name: 'Friend #8', age: 8},
        {name: 'Friend #9', age: 9},
        {name: 'Friend #10', age: 10},
    ];
    return (
        <div className="listscreen__container">
            <h1>List Screen</h1>
            <FlatList 
                // horizontal={true}      // render the list from left to right
                // showsHorizontalScrollIndicator={false}  // disable the scroll bar
                // key is required for perf opt.
                keyExtractor={(friend) => friend.name}  
                data={friends} 
                // renderItem={(element) => {
                    // element === {item:{name: 'Friend #1'}, index: 0}
                    // so we will replace element such that we will retreive only item
                // }
                renderItem={({ item }) => {
                     return (
                        <p>{item.name} - Age: {item.age}</p>
                     );                   
                }}
            />
        </div>
    )
}

export default ListScreen
