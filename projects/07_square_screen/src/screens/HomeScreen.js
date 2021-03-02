import React from 'react'
import { Button } from 'react-native'
import '../styles/HomeScreen.css'

function HomeScreen({navigation}) {
  return (
    <div className="homescreen__container">
        <h1>Home Screen</h1>
        <div className="homescreen__buttons">
          <Button 
            title="Component Screen"
            onPress={()=>{
              navigation.navigate('Components');
            }}
          />
        </div>
        <div className="homescreen__buttons">
          <Button 
            title="List Screen"
            onPress={()=>{
              navigation.navigate('List');
            }}
          />
        </div>
        <div className="homescreen__buttons">
          <Button 
            title="Image Screen"
            onPress={()=>{
              navigation.navigate('Image');
            }}
          />
        </div>
        <div className="homescreen__buttons">
          <Button 
            title="Counter Screen"
            onPress={()=>{
              navigation.navigate('Counter');
            }}
          />
        </div>
        <div className="homescreen__buttons">
          <Button 
            title="Color Screen"
            onPress={()=>{
              navigation.navigate('Color');
            }}
          />
        </div>
        <div className="homescreen__buttons">
          <Button 
            title="Square Screen"
            onPress={()=>{
              navigation.navigate('Square');
            }}
          />
        </div>
    </div>
  )
}

export default HomeScreen