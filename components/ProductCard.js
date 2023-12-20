import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function ProductCard(props) {
  const { data } = props;
  return (
    <View style={styles.productCard}>
      <Image style={styles.image} source={data.image} />
      <View>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.price}>{`PKR ${data.price}`}</Text>
        <Text style={styles.desc} numberOfLines={1}>
          {data.desc}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 16,
    marginRight: 12,
  },
  name: {
    fontSize: 20,
    fontFamily: "Bold",
    color: "#000",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
    fontFamily: "Regular",
  },
  desc: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Regular",
  },
});
