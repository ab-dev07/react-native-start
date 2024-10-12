import React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  Button,
  Modal,
} from "react-native";

import { useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";

function Typebox(props: any) {
  const [text, setText] = useState("");
  function textinput(enteredText: string) {
    setText(enteredText);
    console.log(text);
  }
  function handle() {
    props.textListinput(text);
    props.back();
    setText("");
  }
  const handleprops = () => {
    props.setVisible(!props.visible);
  };
  return (
    <>
      <Button title="click me" onPress={handleprops}></Button>
      <Modal visible={props.visible} animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: 8,
            width: "100%",
            marginHorizontal: 20,
          }}
        >
          <TextInput
            // defaultValue="enter text"
            placeholder="enter text"
            value={text}
            style={{
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              justifyContent: "space-around",
              alignItems: "center",
            }}
            onChangeText={textinput}
          />
          <Button title="click me" onPress={handle} />
          {/* <Button
          title="click me"
          onPress={props.textListinput.bind(null, text)}
        /> */}

          {/* <Text>{text.length < 5 ? "lower" : text.length}</Text> */}
          <Button title="cancel" color="red" onPress={props.back}></Button>
        </View>
      </Modal>
    </>
  );
}

export default Typebox;
