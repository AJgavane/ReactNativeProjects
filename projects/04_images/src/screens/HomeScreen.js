import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";
import '../styles/HomeScreen.css'

// destructuring the props to {navigation}
const HomeScreen = ({navigation}) => {
  return (
      <div className="homescreen__container">
        <h1>Home Screen</h1>
        <div className="homescreen__container__button">
          <Button
            title="Go to Components Screen"
            onPress={() => {navigation.navigate('Components');}}
          />
        </div>
        <div className="homescreen__container__button">
          <Button
            title="Go to List Screen"
            onPress={() => {navigation.navigate('List');}}
          />
        </div>
        <div className="homescreen__container__button">
          <Button
            title="Go to Image Screen"
            onPress={() => {navigation.navigate('Image');}}
          />
        </div>
        {/* <img src={ICON}/> */}
      </div>
  );

  // return(
  //   <View>
  //     <Text style={styles.text}>Home Screen</Text>
  //     <Button 
  //       onPress={() => {navigation.navigate('Components');}}
  //       title="Go to Components Screen"
  //     />
  //     <Button 
  //       onPress={() => {navigation.navigate('List');}}
  //       title="Go to List Screen"
  //     />
  //     <TouchableOpacity onPress={()=>{navigation.navigate('List');}}>
  //       {/* Can also put images not just text */}
  //       <Text>Go to List Screen</Text>
  //     </TouchableOpacity>
  //   </View>
  // )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
