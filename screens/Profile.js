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
      <Text style={{ fontSize: 18, color: "#000", fontWeight: 500 }}>
        My Profile
      </Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({});
