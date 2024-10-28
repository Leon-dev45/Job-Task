// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import styled from "styled-components/native";

export function TabBarIcon({ style, type, color, name }: IconProps) {
  return (
    <View>
      {type === "ion" ? (
        <Ionicons
          size={28}
          name={name}
          color={color}
          style={{ marginTop: 4 }}
        />
      ) : type === "mci" ? (
        <MaterialCommunityIcons
          name={name}
          size={28}
          color={color}
          style={{ marginTop: 4 }}
        />
      ) : (
        <MaterialIcons
          name="insert-chart-outlined"
          size={28}
          color={color}
          style={{ marginTop: 4 }}
        />
      )}
      <HLine style={style} />
    </View>
  );
}

const View = styled.View`
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 50px;
`;
const HLine = styled.View`
  width: 100%;
`;
