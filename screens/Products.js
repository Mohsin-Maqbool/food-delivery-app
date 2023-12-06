import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";

export default function Products() {
  const products = [
    {
      name: "Product 1",
      price: 500,
      desc: "Determines whether the keyboard gets.",
      image: require("../assets/images/1.jpg"),
    },
    {
      name: "Product 2",
      price: 300,
      desc: "Determines whether the keyboard gets.",
      image: require("../assets/images/2.jpg"),
    },
    {
      name: "Product 3",
      price: 700,
      desc: "Determines whether the keyboard gets.",
      image: require("../assets/images/3.jpg"),
    },
    {
      name: "Product 4",
      price: 800,
      desc: "Determines whether the keyboard gets.",
      image: require("../assets/images/4.jpg"),
    },
    {
      name: "Product 5",
      price: 250,
      desc: "Determines whether the keyboard gets.",
      image: require("../assets/images/5.jpg"),
    },
    {
      name: "Product 1",
      price: 500,
      desc: "Determines whether the keyboard gets.",
      image: require("../assets/images/1.jpg"),
    },
    {
      name: "Product 2",
      price: 300,
      desc: "Determines whether the keyboard gets.",
      image: require("../assets/images/2.jpg"),
    },
    {
      name: "Product 3",
      price: 700,
      desc: "Determines whether the keyboard gets.",
      image: require("../assets/images/3.jpg"),
    },
    {
      name: "Product 4",
      price: 800,
      desc: "Determines whether the keyboard gets.",
      image: require("../assets/images/4.jpg"),
    },
    {
      name: "Product 5",
      price: 250,
      desc: "Determines whether the keyboard gets.",
      image: require("../assets/images/5.jpg"),
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <StatusBar />
      {products.map((item, index) => (
        <View key={index} style={styles.productCard}>
          <Image style={styles.image} source={item.image} />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{`PKR ${item.price}`}</Text>
            <Text style={styles.desc} numberOfLines={1}>
              {item.desc}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 40 : StatusBar.height,
    padding: 20,
  },
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  image: {
    height: 120,
    width: 120,
    borderRadius: 20,
    marginRight: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  price: {
    fontSize: 16,
    color: "#000",
    marginBottom: 12,
  },
  desc: {
    fontSize: 16,
    color: "#000",
  },
});
