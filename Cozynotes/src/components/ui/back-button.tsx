import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, View } from "react-native";

interface BackButtonProps {
  icon?: "chevron-back" | "close";
}

const BackButton = ({ icon = "chevron-back" }: BackButtonProps) => {
  return (
    <Pressable onPress={() => router.back()}>
      <View
        cornerSmoothing={1}
        className="size-12 items-center justify-center bg-white rounded-xl"
      >
        <Ionicons name={icon} size={26} color="black" />
      </View>
    </Pressable>
  );
};

export default BackButton;
