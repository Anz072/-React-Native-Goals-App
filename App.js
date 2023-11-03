import { useState } from "react";
import { imgs } from "./imgList";
import { v4 as uuidv4 } from "uuid";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";
import Divider from "./components/Divider";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText !== "") {
      let goal = {
        text: enteredGoalText,
        uri: randomImgSeed(),
        id: uuidv4(),
      };
      setCourseGoals((currentCourseGoals) => [...currentCourseGoals, goal]);
      endAddGoalHandler();
    }
  }

  function randomImgSeed() {
    let int = Math.floor(Math.random() * (14 - 1) + 1);
    return imgs[int];
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.AppContainer}>
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={startAddGoalHandler}
          >
            <Text style={styles.buttonText}>Add New Goal</Text>
          </TouchableOpacity>
          <Divider />
          <View style={styles.scrollViewStyleContainer}>
            <FlatList
              contentContainerStyle={styles.scrollViewStyle}
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    uri={itemData.item.uri}
                    indexKey={itemData.item.id}
                    onDelete={deleteGoalHandler}
                  />
                );
              }}
            ></FlatList>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    padding: 10,
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  mainContainer: {
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewStyle: {
    flexDirection: "column",
    alignItems: "center",
    margin: 3,
  },
  scrollViewStyleContainer: {
    marginTop: 15,
    marginBottom: 5,
    flex: 1,
  },
  buttonStyle: {
    marginTop: 8,
    backgroundColor: "#4CAF50",
    width: "80%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
