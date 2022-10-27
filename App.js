import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Header from "./components/Header";
import List from "./components/List";
import Form from "./components/Form";
export default function App() {
  const [text, SetText] = useState("");
  const addHeandler = (text) => {
    const newTodo = {
      text: text,
      key: Math.random().toString(36).substring(7),
    };
    setList([...list, newTodo]);
    SetText("");
  };
  const [list, setList] = useState([
    {
      text: "calculus HW",
      key: "1",
    },
    {
      text: "Lab 4 DAA",
      key: "2",
    },
    {
      text: "Lab 4 DB",
      key: "3",
    },
  ]);
  const deleteHandler = (key) => {
    setList(list.filter((list) => list.key != key));
  };
  return (
    <View>
      <StatusBar></StatusBar>

      <Header />
      <Form text={text} SetText={SetText} addHeandler={addHeandler} />
      <View>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <List deleteHandler={deleteHandler} el={item} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
