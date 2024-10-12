import React from "react";
import { View, Text, Pressable } from "react-native";

// function Lists({ text }: { text: string }) {
function Lists(props: {
  text: string;
  id: String;
  deleted: (id: String) => void;
}) {
  return (
    <Pressable
      android_ripple={{ color: "red" }}
      onPress={props.deleted.bind(null, props.id)}
    >
      <View>
        <Text
          style={{
            backgroundColor: "#ccc",
            padding: 10,
            borderRadius: 10,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 10,

            width: "100%",
          }}
        >
          {/* {text} */}

          {props.text}
        </Text>
      </View>
    </Pressable>
  );
}

export default Lists;
