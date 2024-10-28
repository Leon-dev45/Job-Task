import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";

const Finance = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>This is the Finance Page</Text>
    </SafeAreaView>
  );
};

export default Finance;

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
