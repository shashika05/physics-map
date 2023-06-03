import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Lottie from "lottie-react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>Welcome to RIIE - 2023</Text>
      <Lottie source={require("./loader.json")} autoPlay loop />
      <Text>Loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt1: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
