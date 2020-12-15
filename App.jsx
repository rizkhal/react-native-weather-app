import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import WeatherInfo from "./components/WeatherInfo";
import UnitsPicker from "./components/UnitsPicker";
import { colors } from "./utils/index";
import ReloadIcon from "./components/ReloadIcon";
import WeatherDetails from "./components/WeatherDetails";
import { WEATHER_API_KEY, WEATHER_BASE_URL } from "react-native-dotenv";

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    fetchData();
  }, [unitsSystem]);

  const fetchData = async () => {
    setCurrentWeather(null);
    setErrorMessage(null);
    try {
      let { status } = await Location.requestPermissionsAsync({});
      if (status !== "granted") {
        setErrorMessage("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });

      const { latitude, longitude } = location.coords;

      await fetch(
        `${WEATHER_BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.cod == 200) {
            setCurrentWeather(res);
          } else {
            setErrorMessage(res.message);
          }
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <ReloadIcon fetchData={fetchData} />
          <UnitsPicker
            unitsSystem={unitsSystem}
            setUnitSystem={setUnitSystem}
          />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails
          unitsSystem={unitsSystem}
          currentWeather={currentWeather}
        />
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>{errorMessage}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.PRIMARY} />
        <Text>{errorMessage}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});
