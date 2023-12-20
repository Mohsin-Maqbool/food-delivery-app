import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ProductCard from "../components/ProductCard";

function Home() {
  const categories = [
    {
      label: "Fast Food",
      icon: <Ionicons name="fast-food" size={24} color="#333" />,
    },
    {
      label: "Tea",
      icon: <FontAwesome5 name="mug-hot" size={24} color="#333" />,
    },
    {
      label: "Clothes",
      icon: <FontAwesome5 name="tshirt" size={24} color="#333" />,
    },
    {
      label: "Grocery",
      icon: <FontAwesome5 name="shopping-basket" size={24} color="#333" />,
    },
    {
      label: "Fast Food",
      icon: <Ionicons name="fast-food" size={24} color="#333" />,
    },
    {
      label: "Tea",
      icon: <FontAwesome5 name="mug-hot" size={24} color="#333" />,
    },
  ];

  const topProducts = [
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headTitle}>Hey Mubashir 👋</Text>
        <View style={styles.searchField}>
          <TextInput
            placeholder="Search your products"
            style={styles.searchInput}
          />
          <Feather name="search" size={24} />
        </View>
      </View>
      <View style={styles.categoriesBlock}>
        <Text style={styles.cataTitle}>Top Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {categories.map((item, index) => (
            <View key={index} style={styles.category}>
              <View style={styles.cataIcon}>{item.icon}</View>
              <Text style={styles.cataLabel}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.topProducts}>
        <Text style={styles.cataTitle}>Top Products</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {topProducts.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  header: {
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 10,
  },
  headTitle: {
    fontSize: 24,
    fontFamily: "Bold",
    marginBottom: 10,
  },
  searchField: {
    backgroundColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  searchInput: {
    fontSize: 15,
    fontFamily: "Regular",
    paddingVertical: 9,
    flex: 1,
  },
  categoriesBlock: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
  },
  cataTitle: {
    fontSize: 20,
    fontFamily: "Bold",
    marginBottom: 20,
  },
  category: {
    alignItems: "center",
    marginRight: 25,
  },
  cataIcon: {
    height: 54,
    width: 54,
    backgroundColor: "#ddd",
    borderRadius: 50,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cataLabel: {
    fontSize: 15,
    fontFamily: "Regular",
  },
  topProducts: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
});
