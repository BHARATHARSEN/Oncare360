import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

// Defining a stack navigator
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home", 
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // headerRight: () => (
        //   <TouchableOpacity
        //     onPress={() => alert("Settings pressed")}
        //     style={{ marginRight: 15 }}
        //   >
        //     <Text style={{ color: "#fff", fontSize: 16 }}>Settings</Text>
        //   </TouchableOpacity>
        // ),
      },
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        title: "Details", 
        headerStyle: {
          backgroundColor: "#2196F3",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackTitleVisible: false, 
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => alert("Back pressed")}
            style={{ marginLeft: 15 }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Back</Text>
          </TouchableOpacity>
        ),
      },
    },
  },
  {
    initialRouteName: "Home", 
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
    transitionConfig: () => ({
      screenInterpolator: (props) => {
        const { position, scene } = props;
        const { index } = scene.route;

        const opacity = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [0, 1],
        });

        return { opacity };
      },
    }),
  }
);

export default createAppContainer(AppNavigator);
