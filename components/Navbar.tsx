import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Navbar = () => {
  const [width, setWidth] = useState(Dimensions.get("window").width);
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "10%",
        width: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#BBBBC4",
        borderStyle: "solid",
        borderWidth: 1,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          gap: 100,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginLeft: width < 1024 ? 30 : 50,
          }}
        >
          <Image source={require("../assets/images/logo.png")} />
          {width >= 1024 && (
            <Image
              source={require("../assets/images/logo_name.png")}
              style={{ marginTop: 5 }}
            />
          )}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              width: width < 1024 ? 150 : 250,
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginRight: 20,
          gap: 10,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <FontAwesome6 name="magnifying-glass" size={23} color={"#9D9DAA"} />
          {width >= 1024 && (
            <Text style={{ color: "#9D9DAA", fontSize: 16 }}>Search...</Text>
          )}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5%",
            marginRight: 10,
          }}
        >
          <Image
            source={require("../assets/images/avatar.png")}
            style={{
              backgroundColor: "#E8EAFC",
              borderRadius: 100,
              width: 50,
              height: 50,
            }}
          />
          <View style={{ justifyContent: "center", marginLeft: 5 }}>
            <Text>Robert Fox</Text>
            <Text style={{ color: "#9D9DAA" }}>Finance Manager</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Navbar;
