import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";

const Pitch = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>This is the Pitching Page</Text>
    </SafeAreaView>
  );
};

export default Pitch;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#BBBBC4",
  },
});
