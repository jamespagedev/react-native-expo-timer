import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  name: string;
  disabled: boolean;
  btnStyles: any;
  textStyles: any;
  onPress: () => any;
}

export default function BtnMain({
  name,
  disabled,
  btnStyles,
  textStyles,
  onPress,
}: Props): JSX.Element {
  return (
    <Pressable
      disabled={disabled}
      style={{ ...styles.btn, ...styles.text, ...btnStyles }}
      onPress={onPress}
    >
      <Text style={{ ...textStyles }}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 80,
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: "#e39a22",
    borderRadius: 5,
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    letterSpacing: 1.4,
    fontWeight: "700",
  },
});

BtnMain.defaultProps = {
  name: "Button",
  disabled: false,
  btnStyles: styles.btn,
  textStyles: styles.text,
  onPress: () => console.log("btn function goes here..."),
};
