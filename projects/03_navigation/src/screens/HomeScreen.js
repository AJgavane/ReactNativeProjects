import React from 'react'
import { Button } from 'react-native'
import '../styles/HomeScreen.css'

function HomeScreen({ navigation }) {
  return (
    <div className="homescreen__container">
      <h1>Home Screen</h1>
      <div className="homescreen__container__button">
        <Button 
          title="Components Screen"
          onPress={() => {navigation.navigate('Components');}}
        />
      </div>
      <div className="homescreen__container__button">
        <Button 
          title="List Screen"
          onPress={()=>{navigation.navigate("List");}}
        />
      </div>
    </div>
  )
}

export default HomeScreen
