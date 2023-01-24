import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ACTIONS, getNewsList } from "./action";
import { store } from "./store";

export default function App() {
  const [names, setNames] = useState([]);
  const [number, setNumber] = useState(0);
  const [newsList, setNewsList] = useState([]);

  const getRandomName = () => {
    const nameList = ["영희", "철수", "창호", "용길", "민지"];
    return nameList[Math.floor(Math.random() * nameList.length)];
  };

  const ADD_NAME = () => {
    console.log("ADD_NAME");
    store.dispatch({ type: ACTIONS.ADD_NAME, name: getRandomName() });
    setNames(store.getState().names);
  };
  const DELETE_NAME = () => {
    console.log("DELETE_NAME");
    store.dispatch({ type: ACTIONS.DELETE_NAME, name: getRandomName() });
    setNames(store.getState().names);
  };
  const PLUS_NUMBER = () => {
    console.log("PLUS_NUMBER");
    store.dispatch({ type: ACTIONS.PLUS_NUMBER });
    setNumber(store.getState().number);
  };
  const MINUS_NUMBER = () => {
    console.log("MINUS_NUMBER");
    store.dispatch({ type: ACTIONS.MINUS_NUMBER });
    setNumber(store.getState().number);
  };
  const FETCH_NEWS_LIST_REQUEST = () => {
    store.dispatch(getNewsList());
    setNewsList(store.getState().newsList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "lightgrey", width: "100%" }}>
        <Button title={ACTIONS.ADD_NAME} onPress={ADD_NAME} />
        <Button title={ACTIONS.DELETE_NAME} onPress={DELETE_NAME} />
        <ScrollView horizontal>
          {names.map((item, idx) => {
            return (
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                {item},{" "}
              </Text>
            );
          })}
        </ScrollView>
      </View>
      <View style={{ flex: 1, backgroundColor: "lightblue", width: "100%" }}>
        <Button title={ACTIONS.PLUS_NUMBER} onPress={PLUS_NUMBER} />
        <Button title={ACTIONS.MINUS_NUMBER} onPress={MINUS_NUMBER} />
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Text style={{ fontSize: 32 }}>{number}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title={ACTIONS.FETCH_NEWS_LIST_REQUEST}
          onPress={FETCH_NEWS_LIST_REQUEST}
        />
        <ScrollView>
          {newsList.map((item, idx) => {
            return (
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                {item.title},{" "}
              </Text>
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
