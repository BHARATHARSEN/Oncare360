import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    const url =
      "https://ddna-oncare360-inc3250--health-assistant-bhar.soului.dh.soulmachines.cloud/?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjU2MDgyNTUsImlzcyI6InNpZ25lZF91cmwtYTIwMmY0MTItMzhjMC00ZGYwLWIzMDMtZmRmMTA0YjRlYTMzIiwiZXhwIjoxODExOTIxODU1LCJlbWFpbCI6Im9uY2FyZTM2MC1pbmMzMjUwLS1oZWFsdGgtYXNzaXN0YW50LWJoYXJAZGRuYS5zdHVkaW8iLCJzb3VsSWQiOiJkZG5hLW9uY2FyZTM2MC1pbmMzMjUwLS1oZWFsdGgtYXNzaXN0YW50LWJoYXIifQ.unRyXhz7MckHQLlV5MZEDYR1rV1eFuS1BVvU5KFaE54&landingPage=false";
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar style="auto" />
        <Image
          source={require("../assets/OnCare360_horizontal.jpg")}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to OnCare360</Text>
        <Text style={styles.description}>
          OnCare360 provides comprehensive health care solutions using advanced
          AI technology to enhance patient care and doctor patient relationship.
        </Text>
        <Text style={styles.subtitle}>Learn more about Oncare360</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Health Monitoring</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>
              Virtual Consultations
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Wellness Tracking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handlePress} style={styles.floatingButton}>
        <Text style={styles.buttonText}>Talk to Lana</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: "contain",
    marginVertical: 20,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 15,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#f4511e",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  optionsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  option: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#f4511e",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
