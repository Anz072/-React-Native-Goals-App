import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(''); // Clear input after adding goal
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.titleText}>New Year's goals</Text>
            <Text style={styles.subtitleText}>
                Make a list of goals you're never going to work towards!
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={goalInputHandler}
                value={enteredGoalText} 
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={addGoalHandler}>
                <Text style={styles.buttonText}>Add Goal</Text>
            </TouchableOpacity>
        </View>
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
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "600",
    },
});
