import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Foundation } from "@expo/vector-icons";

const FloatView = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Guidelines</Text>
        <View style={{ width: "100%", height: 2, backgroundColor: "#000" }} />
        <View style={{ width: "100%", marginTop: 4 }}>
          <Text style={styles.txt1}>1. Main Entrance</Text>
          <Text style={styles.txt1}>2. Stairs to Corridor A</Text>
          <Text style={styles.txt1}>3. Upstairs to PLT-I</Text>
          <Text style={styles.txt1}>4. PLT-I</Text>
          <Text style={styles.txt1}>5. PLT-II</Text>
          <Text style={styles.txt1}>6. Main Building - Floor I</Text>
          <Text style={styles.txt1}>7. Main Building - Floor II</Text>

          <Text style={styles.txt2}>Corridors:</Text>
          <Text style={styles.txt1}>A. Corridor to PLT-I </Text>
          <Text style={styles.txt1}>B. Corridor from PLT-I to PLT-II</Text>
          <Text style={styles.txt1}>C. Corridor of PLT-II</Text>
          <Text style={styles.txt1}>
            D. Corridor from PLT-II to Main Building
          </Text>
          <Text style={styles.txt1}>
            E. Corridors of Floor-2&3 in Main Building.
          </Text>
          <View style={{ marginTop: 12, flexDirection: "row" }}>
            <Foundation name="male-female" size={24} color="black" />
            <Text style={styles.txt1}> - Lavatory</Text>
          </View>
        </View>
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
    padding: 20,
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
  txt1: {
    fontSize: 18,
  },
  txt2: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
