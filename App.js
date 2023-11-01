import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.AppContainer}>
      <View style={styles.inputContainer}>
        <Text>Hello bro!</Text>
        <TextInput style={styles.textInput} placeholder="Your course goal!"></TextInput>
        <Button title="Add Goal"></Button>
      </View>
      <View>
        <Text>List of goals..</Text>
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  AppContainer: {
    padding: 50
  },
  inputContainer:{
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textInput:{
    borderWidth: 1,
    width: '80%',
    height: 45,
    borderColor: '#000'
  }
});
