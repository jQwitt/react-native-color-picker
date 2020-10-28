import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    width: 255,
    height: 40,
  },
  text: {
    backgroundColor: "black",
    color: "white",
    padding: 5,
  },
});

const sliderProps = {
  style: styles.slider,
  minimumValue: 0,
  maximumValue: 255,
  value: 0,
  step: 1,
};

export default function App() {
  const [color, setColor] = useState({ red: 0, blue: 0, green: 0 });

  const getRGB = (color) =>
    `"rgba(${color.red}, ${color.blue}, ${color.green}, 1)"`;

  return (
    <View style={[{ backgroundColor: getRGB(color) }, styles.container]}>
      <Text style={styles.text}>
        R: {color.red} B: {color.blue} G: {color.green}
      </Text>
      <Slider
        {...sliderProps}
        minimumTrackTintColor="red"
        maximumTrackTintColor="red"
        onValueChange={(value) =>
          setColor({ red: value, blue: color.blue, green: color.green })
        }
      />
      <Slider
        {...sliderProps}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="blue"
        onValueChange={(value) =>
          setColor({ red: color.red, blue: value, green: color.green })
        }
      />
      <Slider
        {...sliderProps}
        minimumTrackTintColor="green"
        maximumTrackTintColor="green"
        onValueChange={(value) =>
          setColor({ red: color.red, blue: color.blue, green: value })
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}
