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
import { products } from "../db/products";

export default function Products() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <StatusBar />
      {products.map((item, index) => (
        <ProductCard key={index} data={item} />
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
