import { StyleSheet, Text, View } from "react-native";

function Cart() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 18, color: "#000", fontWeight: 500 }}>
        Cart Screen
      </Text>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({});
