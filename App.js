import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const name = "my awesome app";
  const [enteredText, setEnteredText] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  function onTextEntered(changedText) {
    setEnteredText(changedText);
    setModalVisible(false);
  }

  function onCancel() {
    setModalVisible(false);
  }
  // function onAddTaskPress() {
  //   setModalVisible(true);
  // }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header appName={name} />
      {/* pass modalVisible as prop to Input.js */}
      <Input
        modalIsVisible={modalVisible}
        sendChangedText={onTextEntered}
        cancelPressed={onCancel}
      />
      <Button
        title="Add A Task"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Text>{enteredText}</Text>
    </View>
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
