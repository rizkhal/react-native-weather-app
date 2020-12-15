import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function UnitsPicker({ unitsSystem, setUnitSystem }) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
      mode="dialog"
        style={{ width: 100 }}
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitSystem(item)}
      >
        <Picker.Item label="Celcius°" value="metric" />
        <Picker.Item label="Frenheit°" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitsSystem: {
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 30,
      },
    }),
    left: 30,
    height: 50,
    width: 100,
    position: "absolute",
  },
});
