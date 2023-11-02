import { useState } from "react";
import { imgs } from "./imgList";
import { v4 as uuidv4 } from 'uuid';
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText !== "") {
      let goal = {
        text: enteredGoalText,
        uri: randomImgSeed(),
        id: uuidv4()
      };
      setCourseGoals((currentCourseGoals) => [...currentCourseGoals, goal]);
    }
  }

  function randomImgSeed() {
    let int = Math.floor(Math.random() * (14 - 1) + 1);
    return imgs[int];
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.AppContainer}>
      <View style={styles.mainContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styles.scrollViewStyleContainer}>
          <FlatList
            contentContainerStyle={styles.scrollViewStyle}
            data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text} uri={itemData.item.uri} indexKey={itemData.item.id} onDelete={deleteGoalHandler}/>
            }}
          ></FlatList>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    padding: 15,
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#DCDCDC",
  },
  mainContainer: {
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    height: "100%",
  },
  scrollViewStyle: {
    flexDirection: "column",
    alignItems: 'center',
    margin: 3,
  },
  scrollViewStyleContainer: {
    marginTop: 20,
    marginBottom: 5,
    flex: 1,
  },

});
