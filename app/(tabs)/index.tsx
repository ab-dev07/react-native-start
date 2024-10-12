import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Lists from "@/components/Lists";
import Typebox from "@/components/Inputbox";
// import Typebox from "@/components/Typebox";

export default function HomeScreen() {
  // const [text, setText] = useState("");
  const [textList, settextList] = useState<{ text: string; id: String }[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // function textinput(enteredText: string) {
  //   setText(enteredText);
  //   console.log(text);
  // }
  function textListinput(text: string) {
    // settextList((textList) => [...textList, text]);

    // settextList((textLists) => [...textLists, { text: text, id: Date.now() }]);

    settextList([...textList, { text: text, id: Date.now().toString() }]);
  }
  function deleted(id: String) {
    settextList((textList) => textList.filter((itemmm) => itemmm.id !== id));
    // settextList((textList)=>textList.filter(item)=>item.id !==id);
  }
  const back = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View style={styles.container}>
      {/* <ScrollView  style={{ flex: 5 }}>
        <View>
          {textList.map((item, index) => {
            return (
              // <Text key={index}>{item}</Text>

              <Text
                key={index}
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
                {item}
              </Text>
            );
          })}
        </View>
      </ScrollView> */}
      <Typebox
        textListinput={textListinput}
        visible={isVisible}
        setVisible={setIsVisible}
        back={back}
      />
      <FlatList
        style={{ flex: 5 }}
        data={textList}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={(a) => {
          return (
            // <Text
            //   style={{
            //     backgroundColor: "#ccc",
            //     padding: 10,
            //     borderRadius: 10,
            //     justifyContent: "space-around",
            //     alignItems: "center",
            //     marginTop: 10,

            //     width: "100%",
            //   }}
            // >
            //   {item.item.text}
            // </Text>
            <Lists text={a.item.text} id={a.item.id} deleted={deleted} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
});
