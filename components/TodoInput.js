import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Alert,
  Image
} from "react-native";
import Header from "./Header";
 
const TodoInput = props => {
  const [enteredTask, setEnteredTask] = useState("");
 
  const TodoInputHandler = enteredText => {
    setEnteredTask(enteredText);
  };
 
  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };
 
  const checkInput = enteredTask => {
    if (enteredTask.length > 0) addTaskHandler();
    else {
      Alert.alert("Error", "Please enter a Task", [{ text: "OK" }], {
        cancelable: false
      });
    }
  };
 
  return (
    <Modal visible={props.visible} animationType="slide">
      <Header title="To-Do App"></Header>
 
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task"
          style={styles.input}
          onChangeText={TodoInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={props.onCancel}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              color="green"
              onPress={() => checkInput(enteredTask)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
 
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});
 
export default TodoInput;
//Import React and useState hook. (Line 1)
//Import React native components. (Lines 2 – 10)
//Import Header component. (Line 11)
//Define a state, enteredText,  to add a task to our application. (Line 14)
//Functions are appropriately named according to the tasks they perform:
//  > TodoInputHandler: sets enteredTask state to enteredText. (Lines 16 – 18) 
//  > addTaskHandler: clears the text field after adding a task. (Lines 20 – 23) 
//  > checkInput: checks if the user has entered the task or left the field blank. (Lines 25 – 32
//Return a modal (react native component) that contains the input field and buttons. (Lines 35 – 62)
//Add styles using StyleSheet to the components. (Lines 66 – 87)
//Export the component. (Line 89)