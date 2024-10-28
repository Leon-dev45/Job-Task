import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, View } from "react-native";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from ".";
import { DrawerIcon } from "@/components/navigation/DrawerIcon";
import TabTwoScreen from "./blogs";
import Finance from "./finance";
import Pitch from "./pitch";
import Navbar from "@/components/Navbar";
import Phonebar from "@/components/Phonebar";

export default function TabLayout() {
  const Drawer = createDrawerNavigator();
  const colorScheme = useColorScheme();
  const { width, height } = Dimensions.get("window");
  return (
    <>
      {width > 500 ? <Navbar /> : <Phonebar />}
      {width < 500 ? (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? "light"].purple,
            headerShown: false,
            tabBarInactiveTintColor: "#BBBBC4",
            tabBarShowLabel: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  type="ion"
                  name="home-outline"
                  style={{
                    backgroundColor: focused ? Colors.light.purple : "#BBBBC4",
                    height: focused ? 5 : 0,
                    borderRadius: 20,
                  }}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="blogs"
            options={{
              title: "Blogs",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name="text-box-outline"
                  type="mci"
                  style={{
                    backgroundColor: focused ? Colors.light.purple : "#BBBBC4",
                    height: focused ? 5 : 0,
                    borderRadius: 20,
                  }}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="finance"
            options={{
              title: "Finance",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name="text-box-outline"
                  type="s"
                  style={{
                    backgroundColor: focused ? Colors.light.purple : "#BBBBC4",
                    height: focused ? 5 : 0,
                    borderRadius: 20,
                  }}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="pitch"
            options={{
              title: "Pitch",
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon
                  name="checkbox-blank-badge-outline"
                  type="mci"
                  style={{
                    backgroundColor: focused ? Colors.light.purple : "#BBBBC4",
                    height: focused ? 5 : 0,
                    borderRadius: 20,
                  }}
                  color={color}
                />
              ),
            }}
          />
        </Tabs>
      ) : (
        <Drawer.Navigator
          screenOptions={{
            drawerType: "permanent",
            drawerStyle: {
              backgroundColor: "white",
              width: width >= 1024 ? 200 : 80,
            },
            headerShown: false,
            drawerLabelStyle: { display: "none" },
            drawerInactiveTintColor: "#BBBBC4",
            drawerActiveTintColor: Colors[colorScheme ?? "light"].purple,
            drawerActiveBackgroundColor: "white",
            drawerPosition: "left",
          }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerIcon: ({ color, focused }) => (
                <DrawerIcon
                  type="ion"
                  name="home-outline"
                  lable="Home"
                  os={width >= 1024 ? "lap" : "tab"}
                  style={{
                    backgroundColor: focused ? Colors.light.purple : "#BBBBC4",
                    width: focused ? 5 : 0,
                    borderRadius: 20,
                  }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Blogs"
            component={() => (
              <TabTwoScreen type={width > 500 ? "rest" : "mobile"} />
            )}
            options={{
              drawerIcon: ({ color, focused }) => (
                <DrawerIcon
                  name="text-box-outline"
                  type="mci"
                  lable="Blogs"
                  os={width >= 1024 ? "lap" : "tab"}
                  style={{
                    backgroundColor: focused ? Colors.light.purple : "#BBBBC4",
                    width: focused ? 5 : 0,
                    borderRadius: 20,
                  }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Finance"
            component={Finance}
            options={{
              drawerIcon: ({ color, focused }) => (
                <DrawerIcon
                  name="text-box-outline"
                  type="s"
                  lable="Finance"
                  os={width >= 1024 ? "lap" : "tab"}
                  style={{
                    backgroundColor: focused ? Colors.light.purple : "#BBBBC4",
                    width: focused ? 5 : 0,
                    borderRadius: 20,
                  }}
                  color={color}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Pitch"
            component={Pitch}
            options={{
              drawerIcon: ({ color, focused }) => (
                <DrawerIcon
                  name="checkbox-blank-badge-outline"
                  type="mci"
                  lable="Pitch"
                  os={width >= 1024 ? "lap" : "tab"}
                  style={{
                    backgroundColor: focused ? Colors.light.purple : "#BBBBC4",
                    width: focused ? 5 : 0,
                    borderRadius: 20,
                  }}
                  color={color}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      )}
    </>
  );
}
