import { StyleSheet, Modal, View, Text, Image, Dimensions } from "react-native";
import React, { useState } from "react";
// import { SwiperFlatList } from "react-native-swiper-flatlist";
import data from "../data";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const ImageModal = ({ imageModalVisible, setImageModalVisible }) => {
  let [step, setStep] = useState(1);
  const stepHandle = () => {
    if (step <= 8) {
      setStep(step++);
    } else {
      setStep(1);
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
        <Image
          style={styles.img}
          source={require(`./map/1-2/${step + 1}.jpg`)}
        />
        <TouchableOpacity
          onPress={() => stepHandle()}
          style={{ position: "absolute", right: 20 }}
        >
          <AntDesign name="caretright" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ position: "absolute", right: 10, top: 10 }}>
        <AntDesign name="closesquareo" size={24} color="black" />
      </TouchableOpacity>
    </Modal>
  );
};

export default ImageModal;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: width,
    height: 400,
  },
});
