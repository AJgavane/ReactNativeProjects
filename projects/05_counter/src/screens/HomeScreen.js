import React from 'react'
import { Button } from 'react-native'
import "../styles/HomeScreen.css"

function HomeScreen({navigation}) {
  return (
    <div>
      <h1>Home Screen!</h1>
      <div className="homescreen__container__button">
        <Button 
          title="Components Screen"
          onPress={() => {navigation.navigate("Components");}}
        />
      </div>
      <div className="homescreen__container__button">
        <Button 
          title="List Screen"
          onPress={() => {navigation.navigate("List");}}
        />
      </div>
      <div className="homescreen__container__button">
        <Button 
          title="Image Screen"
          onPress={() => {navigation.navigate("Image");}}
        />
      </div>
      <div className="homescreen__container__button">
        <Button 
          title="Counter Screen"
          onPress={() => {navigation.navigate("Counter");}}
        />
      </div>
    </div>
  )
}

export default HomeScreen
