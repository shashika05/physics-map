import {
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const ImageModal = ({ imageModalVisible, setImageModalVisible, stepArray }) => {
  let [step, setStep] = useState(1);
  const stepHandlePositive = () => {
    if (step <= stepArray[1]) {
      setStep(step++);
    } else {
      setStep(1);
    }
  };
  const stepHandleNegative = () => {
    if (step >= 1) {
      setStep(step--);
    } else {
      setStep(stepArray[1]);
    }
    console.log(step);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={imageModalVisible}
      onRequestClose={() => {
        setImageModalVisible(false);
        setStep(1);
      }}
    >
      <KeyboardAvoidingView style={styles.container}>
        <Image
          style={styles.img}
          source={require("./map/images/" + step + ".jpg")}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            width: 50,
            height: 50,
            backgroundColor: "white",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setStep(1);
            setImageModalVisible(false);
          }}
        >
          <AntDesign name="closesquareo" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={stepHandlePositive}
          onPressOut={stepHandlePositive}
          style={{
            position: "absolute",
            right: 20,
            bottom: 10,
            width: 50,
            height: 50,
            backgroundColor: "white",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          disabled={step === stepArray[1] ? true : false}
        >
          <AntDesign name="caretright" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={stepHandleNegative}
          onPressOut={stepHandleNegative}
          style={{
            position: "absolute",
            left: 20,
            bottom: 10,
            width: 50,
            height: 50,
            backgroundColor: "white",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          disabled={step === 1 ? true : false}
        >
          <AntDesign name="caretleft" size={24} color="black" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
