import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, SafeAreaView, View } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const name = "my awesome app";
  const [enteredText, setEnteredText] = useState("Your goals appear here");
  const [modalVisible, setModalVisible] = useState(false);
  //onConfirm function
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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topContainer}>
        <Header appName={name} />
        {/* pass modalVisible as prop to Input.js */}
        <Button
          title="Add A Task"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>

      <Input
        modalIsVisible={modalVisible}
        sendChangedText={onTextEntered}
        cancelPressed={onCancel}
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>{enteredText}</Text>
      </View>
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
  text: {
    color: "#4510ff",
    fontSize: 18,
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: "#dcd",
  },
});
