import "../../global.css";

import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack />
    </>
  );
}
