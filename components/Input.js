import { View, TextInput, Button, Modal, StyleSheet } from "react-native";
import { useState } from "react";

export default function Input({ sendChangedText, modalVisible }) {
  const [text, setText] = useState("");

  return (
    <Modal visiable={modalVisible}>
      <View style={StyleSheet.container}>
        <TextInput
          value={text}
          onChangeText={(changedText) => {
            setText(changedText);
            sendChangedText(changedText);
          }}
          style={{ backgroundColor: "#eee" }}
        />
        <Button
          title="Confirm"
          onPress={() => {
            sendChangedText(text);
            setText("");
            //setModalVisiable
          }}
        />
      </View>
    </Modal>
  );
}
