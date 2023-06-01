import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// import {SvgUri} from 'react-native-svg'

import Loader from "./src/Loader";
// import data from "./data";
import FloatView from "./src/FloatView";
// import bg from "./src/map/1x.png";
export default function App() {
  // const [data, setData] = useState(data[0]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3000);
  // }, []);
  return loading ? (
    <Loader />
  ) : (
    <ImageBackground
      source={{ uri: "./src/map/1x.png" }}
      resizeMode="cover"
      style={styles.container}
      onLoadStart={() => setLoading(true)}
      onLoadEnd={() => setLoading(false)}
    >
      <TouchableOpacity
        style={styles.floatBtn}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="menu-book" size={40} color="black" />
      </TouchableOpacity>
      <FloatView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  floatBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 64,
    height: 64,
    backgroundColor: "#EF5350",
    borderRadius: 64 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
