import { View, TextInput, Button, Modal, StyleSheet } from "react-native";
import { useState } from "react";

// Receive modalVisible in props
export default function Input({
  sendChangedText,
  modalIsVisible,
  cancelPressed,
}) {
  const [text, setText] = useState("default value");
  function changeText(changedText) {
    setText(changedText);
  }
  // function buttonPressed() {
  //   sendChangedText(text);
  // }
  return (
    // use the received prop in visible prop of Modal
    <Modal visible={modalIsVisible}>
      <View style={styles.container}>
        <TextInput
          value={text}
          onChangeText={changeText}
          style={{ backgroundColor: "red" }}
        />
        <Button
          title="Confirm"
          onPress={() => {
            sendChangedText(text);
            setText("");
          }}
        />
        <Button title="Cancel" onPress={cancelPressed} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
});
