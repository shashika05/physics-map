import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import loader from "./loader.json";

import Lottie from "lottie-react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
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
});
