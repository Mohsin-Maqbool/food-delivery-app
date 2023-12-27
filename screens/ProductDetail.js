import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

export default function ProductDetail() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.head}>
          <Image
            source={require("../assets/images/1.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Product 1</Text>
          <Text style={styles.price}>PKR 400</Text>
          <View style={styles.counterBlock}>
            <View style={styles.counter}>
              <TouchableOpacity style={styles.counterBtn}>
                <Feather name="minus" color="#000" size={24} />
              </TouchableOpacity>
              <Text style={styles.qty}>1</Text>
              <TouchableOpacity style={styles.counterBtn}>
                <Feather name="plus" color="#000" size={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.estimate}>Est. Total: PKR 400</Text>
          </View>
          <View style={styles.desBlock}>
            <Text style={styles.desTitle}>Description</Text>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.btnLabel}>Add 1 to basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    backgroundColor: "#e2e2e2",
  },
  image: {
    height: 220,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    color: "#000",
    fontFamily: "SemiBold",
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontFamily: "Regular",
    color: "#333",
    marginBottom: 25,
  },
  counterBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  counter: {
    backgroundColor: "#ddd",
    flexDirection: "row",
    borderRadius: 20,
  },
  counterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  qty: {
    fontSize: 18,
    color: "#000",
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  estimate: {
    fontSize: 18,
    color: "#000",
    fontFamily: "Medium",
  },
  desBlock: {},
  desTitle: {
    fontSize: 24,
    fontFamily: "SemiBold",
    color: "#000",
    marginBottom: 12,
  },
  description: {
    fontFamily: "Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
  footer: {
    height: 68,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  cartBtn: {
    backgroundColor: "#000",
    height: 45,
    borderRadius: 25,
    alignContent: "center",
    justifyContent: "center",
  },
  btnLabel: {
    fontSize: 15,
    fontFamily: "SemiBold",
    color: "#fff",
    textAlign: "center",
  },
});
