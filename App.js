import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Image } from "react-native";
 
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import DisplayImage from "./components/DisplayImage";
import Header from "./components/Header"; 
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [addTasks, setAddTasks] = useState(false);
 
  const addTaskHandler = taskTitle => {
    setTasks(currentTasks => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle }
    ]);
    setAddTasks(false);
  };
 
  const deleteTaskHandler = taskId => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId);
    });
  };
 
  const canceltaskAdditionHandler = () => {
    setAddTasks(false);
  };
 
  return (
    <View>
      <Header title="To-Do App"></Header>
      <View style={styles.screen}>
        <Button title="Add New task" onPress={() => setAddTasks(true)}></Button>
        <TodoInput
          visible={addTasks}
          onAddTask={addTaskHandler}
          onCancel={canceltaskAdditionHandler}
        />
      </View>
      <DisplayImage taskStatus={tasks} />
 
      <View style={styles.screenlist}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={itemData => (
            <TodoItem
              title={itemData.item.value}
              onDelete={deleteTaskHandler}
              id={itemData.item.id}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    paddingHorizontal: 70
  },
  screenlist: {
    marginLeft: 20,
    marginRight: 20
  }
});
//Import React and useState hook. (Line 1)
//Import React native components. (Line 2)
//Import these components of the project into the app component: (Lines 4 – 7)
// > TodoItem
// > TodoInput
// > DisplayMessage
// > Header
//Define initial states for the data to be rendered. (Lines 10 – 11)
//Functions are appropriately named according to the tasks they perform:
// > addTaskHandler: adds tasks to the list. (Lines 13 – 19)
// > deleteTaskHandler: deletes tasks from the list. (Lines 21 – 25)
// > canceltaskAdditionHandler: cancels adding tasks to the list. (Lines 27 – 29)
//Return the components while passing props to each component. (Lines 31 -58)
//Add styling to components using StyleSheet. (Lines 61 - 70)