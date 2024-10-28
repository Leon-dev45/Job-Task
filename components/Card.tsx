import { Image, ImageURISource, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

type CardProp = {
  name: string;
  desc: string;
  date: string;
  icon: ImageURISource;
};

const Card = ({ name, date, icon, desc }: CardProp) => {
  return (
    <View
      style={{
        width: 260,
        height: 360,
        shadowColor: "#E3E3E8",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.7,
        borderRadius: 15,
        padding: 15,
        borderColor: "#E3E3E8",
        borderStyle: "solid",
        borderWidth: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Image source={icon} />
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 500,
          marginTop: 20,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          color: "#9D9DAA",
          fontSize: 15,
          marginTop: 20,
        }}
      >
        {desc}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          gap: 10,
          marginTop: 20,
        }}
      >
        <AntDesign name="calendar" size={24} color={"#9D9DAA"} />
        <Text style={{ color: "#9D9DAA" }}>{date}</Text>
      </View>
    </View>
  );
};

export default Card;
