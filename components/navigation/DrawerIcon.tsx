// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

export function DrawerIcon({ style, type, color, name, lable, os }: IconProps) {
  return (
    <Container>
      <HLine style={style} />
      {os === "lap" ? (
        <Lable>
          {type === "ion" ? (
            <Ionicons size={24} name={name} color={color} />
          ) : type === "mci" ? (
            <MaterialCommunityIcons name={name} size={24} color={color} />
          ) : (
            <MaterialIcons
              name="insert-chart-outlined"
              size={24}
              color={color}
            />
          )}
          <Text style={{ color: color }}>{lable}</Text>
        </Lable>
      ) : (
        <TabView>
          {type === "ion" ? (
            <Ionicons size={24} name={name} color={color} />
          ) : type === "mci" ? (
            <MaterialCommunityIcons name={name} size={24} color={color} />
          ) : (
            <MaterialIcons
              name="insert-chart-outlined"
              size={24}
              color={color}
            />
          )}
        </TabView>
      )}
    </Container>
  );
}

const Container = styled.View`
  height: 40px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const HLine = styled.View`
  height: 100%;
`;
const Lable = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 80%;
  gap: 8px;
`;

const TabView = styled.View`
  margin-left: 5px;
`;
