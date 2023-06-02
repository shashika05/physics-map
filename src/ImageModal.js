import { StyleSheet, Modal, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const ImageModal = ({ imageModalVisible, setImageModalVisible }) => {
  let [step, setStep] = useState(1);
  useEffect(() => {
    console.log(step);
  }, [step]);
  const stepHandlePositive = () => {
    if (step <= 8) {
      setStep(step++);
    } else {
      setStep(1);
    }
  };
  const stepHandleNegative = () => {
    if (step >= 1) {
      setStep(step--);
    } else {
      setStep(8);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={imageModalVisible}
      onRequestClose={() => setImageModalVisible(false)}
    >
      <View style={styles.container}>
        <Image style={styles.img} source={require(`./map/1-2/${step}.jpg`)} />
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
          onPress={() => setImageModalVisible(false)}
        >
          <AntDesign name="closesquareo" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={stepHandlePositive}
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
        >
          <AntDesign name="caretright" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={stepHandleNegative}
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
        >
          <AntDesign name="caretleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
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
