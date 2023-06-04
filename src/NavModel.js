import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";

// import data from "../data";

const data = [
  {
    id: 1,
    value: "Main Entrance",
    navigatios: [
      { value: "PLT-1", imgArray: [1, 16] },
      { value: "PLT-2", imgArray: [1, 23] },
      { value: "Main Building Floor-1", imgArray: [1, 29] },
      { value: "Main Building Floor-2", imgArray: [1, 45] },
    ],
  },
  {
    id: 2,
    value: "PLT-1",
    navigatios: [
      {
        value: "PLT-2",
        imgArray: [16, 23],
      },
      {
        value: "Main Building Floor-1",
        imgArray: [16, 29],
      },
      {
        value: "Main Building Floor-2",
        imgArray: [16, 45],
      },
    ],
  },
  {
    id: 3,
    value: "PLT-2",
    navigatios: [
      { value: "Main Building Floor-1", imgArray: [23, 29] },
      { value: "Main Building Floor-2", imgArray: [23, 45] },
    ],
  },
  {
    id: 4,
    value: "Main Building Floor-1",
    navigatios: [{ value: "Main Building Floor-2", imgArray: [29, 45] }],
  },
];

const NavModel = ({
  navModel,
  setNavModel,
  setImageModalVisible,
  setStart,
  setEnd,
}) => {
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");

  const [nav, setNav] = useState(data[0].navigatios);

  const fromHandle = () => {
    // set start here
    if (selected1 == "Main Entrance") {
      setNav(data[0].navigatios);
      setStart(1);
    }
    if (selected1 == "PLT-1") {
      setNav(data[1].navigatios);
      setStart(16);
    }
    if (selected1 == "PLT-2") {
      setNav(data[2].navigatios);
      setStart(23);
    }
    if (selected1 == "Main Building Floor-1") {
      setNav(data[3].navigatios);
      setStart(29);
    }
  };

  const toHandle = () => {
    // set end here

    if (selected2 == "PLT-1") {
      setEnd(16);
    }
    if (selected2 == "PLT-2") {
      setEnd(23);
    }
    if (selected2 == "Main Building Floor-1") {
      setEnd(29);
    }
    if (selected2 == "Main Building Floor-2") {
      setEnd(45);
    }
    setNavModel(false);
    setImageModalVisible(true);
  };

  return (
    <Modal
      animationType="slide"
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
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>From</Text>
            <View style={{ marginTop: 16, zIndex: 10 }}>
              <SelectList
                setSelected={(val) => setSelected1(val)}
                data={data}
                save="navigatios"
                search={false}
                placeholder="Select Location"
                dropdownStyles={{ backgroundColor: "#e2e2e2" }}
                onSelect={fromHandle}
              />
              <Text>*Select first</Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>To</Text>
            <View style={{ marginTop: 16, zIndex: 10 }}>
              <SelectList
                setSelected={(val) => setSelected2(val)}
                data={nav}
                save="imgArray"
                search={false}
                placeholder="Select Location"
                dropdownStyles={{ backgroundColor: "#e2e2e2" }}
                onSelect={toHandle}
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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 160,
    marginBottom: 280,
    height: 200,
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
