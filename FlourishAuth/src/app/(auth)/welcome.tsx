import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { useCSSVariable } from "uniwind";
import { Screen } from "~/components/ui/screen";
import Text from "~/components/ui/text";

export default function Welcome() {
  const [colorPrimary, mutedForeground] = useCSSVariable([
    "--color-primary",
    "--color-muted-foreground",
  ]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-1 items-center justify-center px-8">
        <View className="mb-8">
          <Ionicons name="leaf" size={80} color={colorPrimary as string} />
        </View>
        <Text variant="display" className="text-primary mb-4">
          Flourish
        </Text>
        <Text className="text-muted-foreground text-center text-lg px-4">
          Your Personal plant companion for a greener, happier home
        </Text>
      </View>

      <View className="px-6 pb-12 gap-5">
        <Pressable
          onPress={() => {
            router.push("/(auth)/sign-in");
          }}
          className="bg-primary py-4 px-6 rounded-2xl"
        >
          <Text variant="button">로그인</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            router.push("/(auth)/sign-up");
          }}
          className="bg-primary py-4 px-6 rounded-2xl"
        >
          <Text variant="button">회원가입</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
