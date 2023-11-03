import { StyleSheet, Text, Image, View, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View key={props.indexKey} style={styles.goalItemMain}>
      <Pressable
        style={styles.pressableContainer}
        android_ripple={styles.rippleEffect}
        onPress={props.onDelete.bind(this, props.indexKey)}
      >
        <Image source={props.uri} style={styles.goalItemImage} />
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItemMain: {
    backgroundColor: "#eeeeee",
    borderRadius: 4,
    height: 80,
    width: "auto",
    minWidth: "100%",
    flexDirection: "row",
    margin: 3,
  },
  rippleEffect: {
    color: "#ffffff",
  },
  pressableContainer: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    width: "100%",
  },
  goalItemText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222222",
  },
  goalItemImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 16,
    overlayColor: "#eeeeee",
  },
});
