import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NameDisplay = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, {name || "Loading..."}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});

export default NameDisplay;
