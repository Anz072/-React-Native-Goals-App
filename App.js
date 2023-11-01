import { useState } from "react";
import { imgs } from './imgList';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText !== "") {
      let imgSrc = randomImgSeed();
      console.log(imgSrc)
      let goal = {
        text: enteredGoalText,
        uri: imgSrc 
      }
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        goal,
      ]);
      setEnteredGoalText(""); // Clear input after adding goal
      
    }
  }

  function randomImgSeed(){
    let int = Math.floor(Math.random() * (14 - 1) + 1);
    return imgs[int]
  }

  return (
    <View style={styles.AppContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.titleText}>New Year's goals</Text>
          <Text style={styles.subtitleText}>
            Make a list of goals you're never going to work towards!
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal!"
            onChangeText={goalInputHandler}
            value={enteredGoalText} // Control the input value
          />
          <TouchableOpacity style={styles.buttonStyle} onPress={addGoalHandler}>
            <Text style={styles.buttonText}>Add Goal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollViewStyleContainer}>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            {courseGoals.map((goal, index) => (
              <View  key={index} style={styles.goalItemMain}>
                <Text style={styles.goalItemText}>
                  {goal.text}
                </Text>
                <Image
                  source={goal.uri}
                  style={styles.goalItemImage}
                />
              </View>
            ))}
          </ScrollView>
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
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    width: "95%",
    height: 65,
    borderColor: "#00000052",
    paddingHorizontal: 10, // Add padding inside the input
  },
  titleText: {
    fontSize: 42,
    fontWeight: "bold", // Updated fontWeight to a string
    textAlign: "center",
    width: "100%",
    color: "#222222",
  },
  buttonStyle: {
    backgroundColor: "#4CAF50",
    width: 245,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  goalItemMain: {
    backgroundColor: "#eeeeee",
    borderRadius: 4,
    width: "95%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 3,
  },
  goalItemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222222",
  },
  scrollViewStyle: {
    alignItems: "center",
  },
  scrollViewStyleContainer: {
    marginTop: 20,
    marginBottom: 5,
    flex: 1,
  },
  goalItemImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    overlayColor: "#eeeeee",
  },
});
