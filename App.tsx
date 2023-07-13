import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { BtnMain } from "@app/components";

export default function App() {
  // variables
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, toggleTimer] = useState(false);

  // render
  return (
    <View style={styles.container}>
      <View style={styles.headerSpace} />
      <View style={styles.btnsContainer}>
        <BtnMain
          name="START"
          btnStyles={{
            width: 80,
            paddingHorizontal: 10,
            paddingVertical: 16,
            backgroundColor: "#00FF00",
            borderRadius: 5,
          }}
          textStyles={{
            color: "#000000",
            textAlign: "center",
            letterSpacing: 1.4,
            fontWeight: "700",
          }}
          onPress={() => toggleTimer(true)}
        />
        <BtnMain
          name="STOP"
          btnStyles={{ backgroundColor: "#FF0000" }}
          onPress={() => toggleTimer(false)}
        />
        <BtnMain name="RESET" onPress={() => setSeconds(0)} />
      </View>
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
  btnsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
