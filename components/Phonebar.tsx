import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";

const Phonebar = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "auto",
        padding: 5,
        gap: 20,
        height: "22%",
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="arrow-back-ios-new" size={25} color={"#6C5DD3"} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Image source={require("../assets/images/logo.png")} />
          <Image
            source={require("../assets/images/logo_name.png")}
            style={{ marginTop: 5 }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <FontAwesome6 name="magnifying-glass" size={23} color={"#9D9DAA"} />
          <Image
            source={require("../assets/images/avatar.png")}
            style={{
              backgroundColor: "#E8EAFC",
              borderRadius: 100,
              width: 50,
              height: 50,
            }}
          />
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            width: 200,
            height: 50,
            backgroundColor: "#FAFAFB",
            borderColor: "rgba(27, 29, 33, 0.1)",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#9D9DAA" }}>Afterglow</Text>
          <MaterialIcons
            name="arrow-back-ios-new"
            size={15}
            color={"#9D9DAA"}
            style={{ transform: [{ rotate: "270deg" }] }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 50,
            width: 200,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#9D9DAA" }}>Scenario</Text>
          <Text style={{ marginLeft: 10 }}>Default</Text>
          <MaterialIcons
            name="arrow-back-ios-new"
            size={15}
            color={"#9D9DAA"}
            style={{ transform: [{ rotate: "270deg" }], marginLeft: 5 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Phonebar;
