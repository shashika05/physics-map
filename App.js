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

import Loader from "./src/Loader";
// import data from "./data";
import FloatView from "./src/FloatView";
import NavModel from "./src/NavModel";
import ImageModal from "./src/ImageModal";

export default function App() {
  // State Managment
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [navModel, setNavModel] = useState(false);
  let [zoom, setZoom] = useState(2);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [stepArray, setStepArray] = useState([1, 1]);
  let [start, setStart] = useState(1);
  let [end, setEnd] = useState(1);
  let [step, setStep] = useState(stepArray[0]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    setStepArray([start, end]);
    setStep(start);
  }, [start, end]);

  const zoonIn = () => {
    if (zoom < 3) {
      setZoom(zoom++);
    } else {
      setZoom(3);
    }
  };
  const zoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom--);
    } else {
      setZoom(1);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <ImageBackground
      source={require("./src/map/" + zoom + "x.png")}
      resizeMode="cover"
      style={styles.container}
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
        setStart={setStart}
        setEnd={setEnd}
      />
      <ImageModal
        imageModalVisible={imageModalVisible}
        setImageModalVisible={setImageModalVisible}
        setLoading={setLoading}
        stepArray={stepArray}
        step={step}
        setStep={setStep}
      />
      <View style={{ position: "absolute", left: 12, bottom: 12 }}>
        <TouchableOpacity
          onPressIn={zoonIn}
          onPressOut={zoonIn}
          style={styles.zoomBtns}
          disabled={zoom === 3}
        >
          <Feather name="zoom-in" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={zoomOut}
          onPressOut={zoomOut}
          style={styles.zoomBtns}
          disabled={zoom === 1}
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
