import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import BtnMain from "@components/btnMain";

export default function App() {
  // variables
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, toggleTimer] = useState(false);

  const getDoubleDigits = (number: number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };

  // setup
  useEffect(() => {
    let interval: NodeJS.Timer | null = null;
    if (isActive) {
      interval = setInterval(() => setSeconds((seconds) => seconds + 1), 1000);
    }
    return () => clearInterval(interval!);
  }, [isActive, seconds]);

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
      <View style={styles.timeContainer}>
        <Text
          style={{
            color: seconds === 0 ? "#FFFFFF" : isActive ? "#00FF00" : "#FF0000",
            fontSize: 28,
            fontWeight: "700",
          }}
        >
          {getDoubleDigits(Math.floor((seconds / (60 * 60)) % 24))} :{" "}
          {getDoubleDigits(Math.floor((seconds / 60) % 60))} :{" "}
          {getDoubleDigits(seconds % 60)}
        </Text>
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
  timeContainer: {
    alignItems: "center",
    width: "100%",
    padding: 20,
    backgroundColor: "#161b22",
  },
});
