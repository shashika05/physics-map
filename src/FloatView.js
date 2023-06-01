import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FloatView = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Direction Map</Text>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => setModalVisible(false)}
        >
          <MaterialCommunityIcons
            name="close-octagon-outline"
            size={40}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FloatView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
    // justifyContent: "center",
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 100,
    marginBottom: 100,
    borderRadius: 16,
  },
  closeBtn: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
});
