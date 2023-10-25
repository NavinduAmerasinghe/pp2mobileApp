import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Vibration,
  LogBox,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Modal from "react-native-modal";
import animalinfo from "./screen/data/AnimalInfo";
import GuideLine from "./screen/Notification";
import { Audio } from "expo-av";
import LoginScreen from "./screen/loginScreen/loginScreen";
import SignupScreen from "./screen/signupScreen/signupScreen";
import LandingScreen from "./screen/LandingScreen/LandingScreen";
import DashBoardScreen from "./screen/DashBoardScreen/DashBoardScreen";
import TabNavScreen from "./screen/TabNavScreen/TabNavScreen";
import GeofenceMap from "./screen/GeofenceMap/GeofenceMap";
import LocationHistory from "./screen/LocationHistoryScreen/LocationHistoryScreen";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
// import UserLocation from "./screen/Location/UserLocation";
import * as Notifications from "expo-notifications";
import UserLocation from "./screen/Location/UserLocation";
import { MyContextProvider } from "./screen/Context/MyContext";

import fetchLatestAnimal from "./screen/fetchLatestAnimal";
import displayNotification from "./screen/displayNotification";

import animalInfo from "./screen/data/AnimalInfo";

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs();

// import Sound from 'react-native-sound';
//app.js

// import Sound from 'react-native-sound';
// import { Platform } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [fetchedAnimal, setFetchedAnimal] = useState("");
  useEffect(() => {
    async function fetchAndDisplayLatestAnimal() {
      try {
        const latestAnimal = await fetchLatestAnimal();
        if (latestAnimal && latestAnimal.name) {
          const notificationId = await displayNotification(latestAnimal.name);
          console.log("Notification ID:", notificationId);
          // const isMatchingAnimal = animalInfo.some(
          //   (animal) => animal.title === latestAnimal.name
          // );
          // if (isMatchingAnimal) {
          //   const notificationId = await displayNotification(latestAnimal.name);
          //   console.log("Notification ID:", notificationId);
          // }

          // Delete all animals after displaying the notification using fetch
          // const response = await fetch(
          //   "http://192.168.1.6:8000/api/yolo/animals",
          //   {
          //     method: "DELETE",
          //   }
          // );

          // if (response.ok) {
          //   console.log("All animals deleted");
          // } else {
          //   console.error("Failed to delete all animals");
          // }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    // Fetch and display the latest animal immediately
    fetchAndDisplayLatestAnimal();

    // Set up an interval to run the function every 5 seconds
    // const intervalId = setInterval(fetchAndDisplayLatestAnimal, 5000);

    // Cleanup the interval when the component unmounts
    // return () => clearInterval(intervalId);
  }, []);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  return (
    <MyContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="GeofenceMap" component={GeofenceMap} /> */}
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="loginScreen" component={LoginScreen} />
          <Stack.Screen name="signupScreen" component={SignupScreen} />
          <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
          <Stack.Screen name="TabNavScreen" component={TabNavScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="GuideLines" component={GuideLine} />
          <Stack.Screen name="LocationHistory" component={LocationHistory} />
          {/* <Stack.Screen name="UserLocation" component={UserLocation}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </MyContextProvider>
  );
};

export default App;
