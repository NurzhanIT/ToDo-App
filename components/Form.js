import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Form({ addHeandler, text, SetText }) {
  const onChange = (text) => {
    SetText(text);
  };
  return (
    <View>
      <TextInput
        onChangeText={onChange}
        placeholder="Впешите задачу"
        style={styles.input}
        value={text}
      />
      <Button
        onPress={() => {
          addHeandler(text);
        }}
        style={styles.btn}
        title="Добавить задачу"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "60%",
    marginVertical: 20,
    marginHorizontal: "20%",
  },
  btn: {
    color: "gray",
    backgroundColor: "red",
    width: "10%",
  },
});
