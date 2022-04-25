import React from "react";
import { Image, StyleSheet } from "react-native";
 
const DisplayImage = props => {
  if (props.taskStatus.length < 1) {
    return (
      <Image style={styles.image} source={require("../assets/roger.png")} />
    );
  } else {
    return null;
  }
};
 
const styles = StyleSheet.create({
  image: {
    width: 600,
    height: 300,
    margin:160,
    alignSelf:"center",

  }
});
 
export default DisplayImage;
//Import React. (Line 1)
//Import React native components. (Line 2)
//If condition (conditional rendering) to display the image only when there is no task. (Lines 5 – 11)
//Image source is the location of the image where it is to be imported from. (Line 7)
//Add style using StyleSheet to define the size and alignment of the image. You may adjust the size of the image according to your screen size. (Lines 14 – 21)
//Export the component. (Line 23)