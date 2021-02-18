import React from 'react'
import { Button } from 'react-native'
import '../styles/HomeScreen.css'

function HomeScreen({navigation}) {
  return (
    <div className="homescreen__container">
       <h1>Home Screen</h1>
        <div className="homescreen_button_container">
          <Button 
            title="Components Screen"
            onPress={()=>{
                navigation.navigate("Components");
            }}
          />
        </div>
        <div className="homescreen_button_container">
          <Button 
            title="List Screen"
            onPress={()=>{
              navigation.navigate("List");
            }}
          />
        </div>
        <div className="homescreen_button_container">
          <Button 
            title="Image Screen"
            onPress={()=>{
              navigation.navigate("Image");
            }}
          />
        </div>
        <div className="homescreen_button_container">
          <Button 
            title="Counter Screen"
            onPress={()=>{
              navigation.navigate("Counter");
            }}
          />
        </div>
        <div className="homescreen_button_container">
          <Button 
            title="Color Screen"
            onPress={()=>{
              navigation.navigate("Color");
            }}
          />
        </div>
    </div>
  )
}

export default HomeScreen
