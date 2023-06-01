import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";

import data from "../data";

const NavModel = ({ navModel, setNavModel }) => {
  const [selected, setSelected] = useState("");

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={navModel}
      onRequestClose={() => setNavModel(false)}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Navigation</Text>
        <View style={{ width: "100%", height: 2, backgroundColor: "#000" }} />

        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <View
            style={{
              flex: 0.5,
              // backgroundColor: "#b2b2b2",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>From</Text>
            <Text>Main Entrance</Text>
          </View>
          <View
            style={{
              // backgroundColor: "#a3a3a3",
              flex: 0.5,
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>To</Text>
            <View style={{}}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="location"
                search={false}
                placeholder="Select Location"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => setNavModel(false)}
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

export default NavModel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
    // justifyContent: "center",
    height: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
    marginBottom: 168,
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
