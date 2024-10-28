import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Cards } from "@/constants/Cards";
import Card from "@/components/Card";

export default function TabTwoScreen({ type }: { type: string }) {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 25,
          paddingVertical: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Blogs</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: type !== "rest" ? 10 : 25,
              borderRadius: 15,
              shadowColor: "#E3E3E8",
              shadowOffset: { width: 3, height: 3 },
              shadowOpacity: 0.7,
            }}
          >
            <Text style={{ color: "#6C5DD3", fontSize: 20 }}>Add New</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#6C5DD3",
              paddingVertical: 10,
              paddingHorizontal: type !== "rest" ? 10 : 25,
              borderRadius: 15,
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Preview</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          marginBottom: 20,
          padding: 10,
          rowGap: 20,
          justifyContent: type !== "rest" ? "center" : "space-between",
        }}
      >
        {Cards.map((card) => (
          <Card
            name={card.name}
            icon={card.icon}
            date={card.date}
            desc={card.desc}
            key={card.name}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    // overflow: "scroll",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#BBBBC4",
  },
});
