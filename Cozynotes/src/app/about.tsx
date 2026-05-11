import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Alert, Pressable, ScrollView, View } from "react-native";
import Screen from "~/components/ui/screen";
import Text from "~/components/ui/text";

const About = () => {
  const handleShare = () => {
    Alert.alert("Share", "Share this app whit your friends");
  };

  const handleInfo = () => {
    Alert.alert("Info", "This is Cozy note");
  };

  return (
    <Screen>
      <Stack.Screen
       
        options={{
          headerBackTitle: "Back",
          headerStyle: { backgroundColor: "#faf9f7" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerBlurEffect: "systemMaterial",
          headerTransparent: false,
          headerLargeTitle: false,

          headerLeft: () => {
            return (
              <Pressable
                onPress={() => {
                  router.back();
                }}
                className="flex-row items-center -ml-2 px-5"
              >
                <Ionicons name="chevron-back" size={28} />
                <Text variant="subtitle">About</Text>
              </Pressable>
            );
          },

          headerRight: () => {
            return (
              <View className="flex-row gap-4 px-5">
                <Pressable onPress={handleShare}>
                  <Ionicons name="share-outline" size={24} />
                </Pressable>
                <Pressable onPress={handleInfo}>
                  <Ionicons name="information-outline" size={24} />
                </Pressable>
              </View>
            );
          },
        }}
      />

      <ScrollView>
        <View className="flex-1 items-center justify-center">
          <Ionicons name="document-text" size={40} />
          <Text variant="title" className="mt-5">
            Cozy Note
          </Text>
          <Text variant="note" className="mt-5">
            A simple note taking app
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default About;
