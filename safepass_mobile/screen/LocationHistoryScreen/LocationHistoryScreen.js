import React, { useContext } from "react";
import { colors } from "../../theme";
import Background from "../background";
import ScreenWrapper from "../../components/screenWrapper";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MyContext } from "../Context/MyContext";

const LocationHistoryScreen = (props) => {
  const { container, title, card, animalName, distance, time, subTitle } =
    styles;

  const { data } = useContext(MyContext);

  return (
    <Background>
      <ScreenWrapper>
        <View style={container}>
          <Text style={title}>🎗️ Location History 🎗️</Text>
          <Text style={subTitle}>No of records: {data.length}</Text>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={true}
          >
            {data.map((item, index) => (
              <TouchableOpacity style={card} key={index} onPress={() => {}}>
                <View>
                  <Text style={animalName}>{item.animalName}</Text>
                  <Text style={distance}>Distance: {item.distance} km</Text>
                  <Text style={time}>Log Time: {item.time.slice(11, 19)}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScreenWrapper>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 45,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
    color: colors.primary,
    fontFamily: "Sofia",
  },
  subTitle: {
    fontSize: 16,
    color: colors.secondary,
    paddingBottom: 10,
  },
  card: {
    backgroundColor: "white",
    width: 300,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  animalName: {
    fontSize: 14,
    textAlign: "center",
    color: colors.primary,
  },
  distance: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.text,
  },
  time: {
    fontSize: 12,
    textAlign: "center",
    color: colors.text,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
  },
});

export default LocationHistoryScreen;
