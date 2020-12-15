import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function WeatherDetails({ unitsSystem, currentWeather }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitsSystem === "metric"
      ? `${Math.round(speed)} m/s`
      : `${Math.round(speed)} m/h`;

  return (
    <View>
      <View style={styles.weatherDetails}>
        <View style={styles.weatherDetailsRow}>
          <View
            style={{
              ...styles.weatherDetailsBox,
              borderRightWidth: 1,
              borderRightColor: colors.BORDER,
            }}
          >
            <View style={styles.weatherDetailsRow}>
              <FontAwesome5
                name="temperature-low"
                size={25}
                color={colors.PRIMARY}
              />
              <View style={styles.weatherDetailsItems}>
                <Text>Feels Like</Text>
                <Text style={{ fontWeight: "bold" }}>{feels_like} °</Text>
              </View>
            </View>
          </View>
          <View style={{ ...styles.weatherDetailsBox }}>
            <View style={styles.weatherDetailsRow}>
              <MaterialCommunityIcons
                name="water"
                size={30}
                color={colors.PRIMARY}
              />
              <View style={styles.weatherDetailsItems}>
                <Text>Humidity</Text>
                <Text style={{ fontWeight: "bold" }}>{humidity} %</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.weatherDetails}>
        <View style={styles.weatherDetailsRow}>
          <View
            style={{
              ...styles.weatherDetailsBox,
              borderRightWidth: 1,
              borderRightColor: colors.BORDER,
            }}
          >
            <View style={styles.weatherDetailsRow}>
              <MaterialCommunityIcons
                name="weather-windy"
                size={30}
                color={colors.PRIMARY}
              />
              <View style={styles.weatherDetailsItems}>
                <Text>Wind Speed</Text>
                <Text style={{ fontWeight: "bold" }}>{windSpeed}</Text>
              </View>
            </View>
          </View>
          <View style={{ ...styles.weatherDetailsBox }}>
            <View style={styles.weatherDetailsRow}>
              <MaterialCommunityIcons
                name="speedometer"
                size={30}
                color={colors.PRIMARY}
              />
              <View style={styles.weatherDetailsItems}>
                <Text>Pressure</Text>
                <Text style={{ fontWeight: "bold" }}>{pressure} hPa</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderColor: colors.BORDER,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItems: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
