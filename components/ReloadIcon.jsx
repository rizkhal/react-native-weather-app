import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils";

export default function ReloadIcon({ fetchData }) {
  const reloadIconName = Platform.OS === "ios" ? "ios-refresh" : "md-refresh";
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={fetchData}
        name={reloadIconName}
        size={24}
        color={colors.PRIMARY}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  reloadIcon: {
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 40,
      },
    }),
    right: 30,
    position: "absolute",
  },
});
