import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import BackButton from "~/components/ui/back-button";
import Screen from "~/components/ui/screen";
import Text from "~/components/ui/text";

const Settings = () => {
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-row items-center px-5 pb-4 pt-2">
        <BackButton />
        <Text variant="title" className="ml-4">
          Settings
        </Text>
      </View>
      <ScrollView contentContainerClassName="px-5 pb-8">
        <View className="bg-white px-5 py-20 items-center mb-6 rounded-2xl">
          <Ionicons name="document-text" size={32} />
          <Text variant="subtitle">Cozy Note</Text>
          <Text variant="caption-secondary">A simple note taking app</Text>
        </View>

        <Link href={"/about"} asChild>
          <Pressable>
            <View
              cornerSmoothing={1}
              className="bg-black/80 p-4 flex-row items-center justify-center gap-2 rounded-2xl"
            >
              <Text variant="button" className="text-white">
                Learn more
              </Text>
            </View>
          </Pressable>
        </Link>
      </ScrollView>
    </Screen>
  );
};

export default Settings;
