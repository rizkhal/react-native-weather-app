import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { colors } from "../utils/index";

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, main, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={{ textTransform: "capitalize" }}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    justifyContent: "center",
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  textPrimary: {
    fontSize: 40,
    color: colors.PRIMARY,
  },
  textSecondary: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.SECONDARY,
    marginTop: 10,
  },
});
