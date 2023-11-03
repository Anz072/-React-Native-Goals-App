import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); // Clear input after adding goal
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>New Year's resolutions</Text>
        <Text style={styles.subtitleText}>
          Make a list of goals you're never going to work towards!
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Your New Year's resolution!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View>
          <TouchableOpacity style={styles.buttonStyle} onPress={addGoalHandler}>
            <Text style={styles.buttonText}>Add Goal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle1} onPress={props.onCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    color: "#222222",
  },
  textInput: {
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    width: "95%",
    height: 65,
    borderColor: "#00000052",
    paddingHorizontal: 10,
  },
  buttonStyle: {
    backgroundColor: "#4CAF50",
    width: 245,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4
  },
  buttonStyle1: {
    backgroundColor: "#8e918e",
    width: 245,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});
