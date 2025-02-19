import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient colors={["#A1C4FD", "#FFFFFF"]} style={styles.BackGround}>
      <LinearGradient colors={["#FFFFFF", "#E0EAFC"]} style={styles.NavBar}>
        <Image
          source={require("../assets/images/LoginPage/BarberShop.png")}
          style={styles.Logo}
        />
      </LinearGradient>
      <View style={styles.middle}>
        <Text style={styles.Title}>Leon The Barber</Text>
        <Text style={styles.SecondaryTitle}>
          Professional men's hairdresser
        </Text>
        <Text style={styles.Address}>The address is:XXXXXX</Text>
        <TouchableOpacity></TouchableOpacity>
        <LinearGradient colors={["#6A5ACD", "#483D8B"]} style={styles.Links}>
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => console.log("For queues")}
          >
            <Text style={styles.LinksText}>For queues</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient colors={["#6A5ACD", "#483D8B"]} style={styles.Links}>
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => console.log("Waze")}
          >
            <Text style={styles.LinksText}>Waze</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient colors={["#6A5ACD", "#483D8B"]} style={styles.Links}>
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => console.log("About us")}
          >
            <Text style={styles.LinksText}>About us</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.ContactUs}>Name:Leon David Machlis</Text>
        <Text style={styles.ContactUs}>Contact us: 050-0000000</Text>
        <Text style={styles.ContactUs}>Email: LeonDavid@gmail.co.il</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  BackGround: { width: "100%", height: "100%" },
  NavBar: {
    alignItems: "center",
    width: "100%",
    height: "20%",
    borderColor: "#A7C7E7",
    borderBottomWidth: 1,
  },
  Logo: { width: 200, height: 200, top: "12%", justifyContent: "center" },
  middle: { alignItems: "center", top: "5%", width: "100%", height: "70%" },
  Title: {
    textAlign: "center",
    fontSize: 40,
    color: "#000000",
    lineHeight: 40,
  },
  SecondaryTitle: {
    textAlign: "center",
    fontSize: 20,
    color: "#000000",
    marginTop: 10,
    lineHeight: 20,
  },
  Address: {
    textAlign: "center",
    fontSize: 18,
    color: "#000000",
    marginTop: 10,
    lineHeight: 18,
  },
  Links: {
    marginTop: 60,
    borderWidth: 5,
    borderColor: "#000000",
    width: "55%",
    height: "10%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  LinksText: {
    fontSize: 22,
    color: "#FFFFFF",
    lineHeight: 22,
  },
  bottom: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
  },
  ContactUs: {
    textAlign: "left",
    fontSize: 18,
    color: "#000000",
    lineHeight: 18,
  },
  TouchableOpacity: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
