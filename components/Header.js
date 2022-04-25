import React from "react";
import { StyleSheet, View, Text } from "react-native";
 
const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    paddingTop: 40,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "white",
    fontSize: 20
  }
});
 
export default Header;
//Import React. (Line 1)
//Import React Native components. (Line 2)
//Return Header text along with style. (Lines 5 – 9)
//Add style to create the Header using StyleSheet. (Lines 12 – 25)
//Export the component. (Line 27)