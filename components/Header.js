import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Alert } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text
        onPress={() =>
          Alert.alert("Hello", "this alert", [{ text: "Yes" }, { text: "No" }])
        }
        style={styles.text}
      >
        Todo List
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50,
    height: 100,
    backgroundColor: "silver",
  },
  text: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
