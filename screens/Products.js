import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import ProductCard from "../components/ProductCard";

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
        <ProductCard data={item} key={index} />
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
});
