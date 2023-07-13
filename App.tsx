import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSpace} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    alignItems: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#0d1117",
  },
  headerSpace: {
    width: "100%",
    height: 100,
  },
});
