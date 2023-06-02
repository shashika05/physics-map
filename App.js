import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// import {SvgUri} from 'react-native-svg'

import Loader from "./src/Loader";
// import data from "./data";
import FloatView from "./src/FloatView";
import NavModel from "./src/NavModel";
import ImageModal from "./src/ImageModal";
// import bg from "./src/map/1x.png";
export default function App() {
  // const [data, setData] = useState(data[0]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [navModel, setNavModel] = useState(false);
  // const [zoom, setZoom] = useState(3);
  const [imageModalVisible, setImageModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <ImageBackground
      source={require("./src/map/3x.png")}
      resizeMode="cover"
      style={styles.container}
      onLoadEnd={() => setLoading(false)}
      resizeMethod="scale"
    >
      <TouchableOpacity
        style={styles.floatBtn1}
        onPress={() => setNavModel(true)}
      >
        <MaterialCommunityIcons
          name="navigation-variant-outline"
          size={40}
          color="black"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.floatBtn2}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="menu-book" size={40} color="black" />
      </TouchableOpacity>
      <FloatView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <NavModel
        imageModalVisible={imageModalVisible}
        setImageModalVisible={setImageModalVisible}
        navModel={navModel}
        setNavModel={setNavModel}
      />
      <ImageModal
        imageModalVisible={imageModalVisible}
        setImageModalVisible={setImageModalVisible}
      />
      <View style={{ position: "absolute", left: 12, bottom: 12 }}>
        <TouchableOpacity
          onPress={() => setZoom(zoom++)}
          style={styles.zoomBtns}
        >
          <Feather name="zoom-in" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setZoom(zoom--)}
          style={styles.zoomBtns}
        >
          <Feather name="zoom-out" size={30} color="black" />
        </TouchableOpacity>
      </View>
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
  floatBtn1: {
    position: "absolute",
    bottom: 100,
    right: 20,
    width: 64,
    height: 64,
    backgroundColor: "#EF5350",
    borderRadius: 64 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  floatBtn2: {
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
  zoomBtns: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b3b3b3",
    borderRadius: 48 / 2,
    marginBottom: 3,
  },
});
