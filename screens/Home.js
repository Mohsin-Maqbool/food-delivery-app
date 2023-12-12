import { StyleSheet, Text, View } from "react-native";

function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, color: "#000", fontFamily: "interBold" }}>
        Home Screen
      </Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});
