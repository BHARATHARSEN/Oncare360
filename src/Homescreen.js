import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Modal from "react-native-modal";
import { WebView } from "react-native-webview";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [webViewLoaded, setWebViewLoaded] = useState(false);
  const webViewRef = useRef(null);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setWebViewLoaded(false);
    setModalVisible(false);
  };

  const handleWebViewLoad = () => {
    setWebViewLoaded(true);
  };

  
  const injectedJavaScript = `
    (function() {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'viewport');
      meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
      document.getElementsByTagName('head')[0].appendChild(meta);
      
      // Hide video controls
      const style = document.createElement('style');
      style.textContent = 'video::-webkit-media-controls-panel { display: none !important; }';
      document.head.append(style);
    })();
    true;
  `;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar style="auto" />
        <Image
          source={require("../assets/OnCare360_horizontal.jpg")}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to OnCare360</Text>
        <Text style={styles.description}>
          OnCare360 provides comprehensive health care solutions using advanced
          AI technology to enhance patient care and doctor-patient
          relationships.
        </Text>
        <Text style={styles.subtitle}>Learn more about Oncare360</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Health Monitoring</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Virtual Consultations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Wellness Tracking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Button to Open WebView */}
      <TouchableOpacity onPress={handlePress} style={styles.floatingButton}>
        <Text style={styles.buttonText}>Talk to Lana</Text>
      </TouchableOpacity>

      {/* Modal with WebView */}
      <Modal
        isVisible={modalVisible}
        style={styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={handleClose}
      >
        <View style={styles.webViewContainer}>
          <View style={styles.webViewWrapper}>
            {!webViewLoaded && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Loading AI Model...</Text>
              </View>
            )}
            <WebView
              ref={webViewRef}
              source={{
                uri: "https://ddna-oncare360-inc3250--health-assistant-bhar.soului.dh.soulmachines.cloud/?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjU2MDgyNTUsImlzcyI6InNpZ25lZF91cmwtYTIwMmY0MTItMzhjMC00ZGYwLWIzMDMtZmRmMTA0YjRlYTMzIiwiZXhwIjoxODExOTIxODU1LCJlbWFpbCI6Im9uY2FyZTM2MC1pbmMzMjUwLS1oZWFsdGgtYXNzaXN0YW50LWJoYXJAZGRuYS5zdHVkaW8iLCJzb3VsSWQiOiJkZG5hLW9uY2FyZTM2MC1pbmMzMjUwLS1oZWFsdGgtYXNzaXN0YW50LWJoYXIifQ.unRyXhz7MckHQLlV5MZEDYR1rV1eFuS1BVvU5KFaE54",
              }}
              style={styles.webView}
              onLoad={handleWebViewLoad}
              injectedJavaScript={injectedJavaScript}
              javaScriptEnabled={true}
              allowsInlineMediaPlayback={true}
              mediaPlaybackRequiresUserAction={false}
            />
          </View>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    alignSelf: "center",
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
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modal: {
    margin: 0,
    justifyContent: "center",
  },
  webViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "rgba(244, 81, 30, 0.8)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 17,
  },

  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  webViewWrapper: {
    width: width * 0.9, // Resizing WebView width to be 90% of screen
    height: height * 0.8, // Resizing WebView height to be 70% of screen
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  webView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#000",
  },
});
