import React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

import { useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";

function Typebox(props: any) {
  const [text, setText] = useState("");
  function textinput(enteredText: string) {
    setText(enteredText);
    console.log(text);
  }
  return (
    <>
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
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            justifyContent: "space-around",
            alignItems: "center",
          }}
          onChangeText={textinput}
        />
        <Button title="click me" onPress={props.textListinput} />
      </View>
    </>
  );
}

export default Typebox;
