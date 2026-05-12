import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image, Pressable, ScrollView, View } from "react-native";
import { useCSSVariable } from "uniwind";
import { Screen } from "~/components/ui/screen";
import Text from "~/components/ui/text";
import { userData } from "~/lib/constants/userData";



const Profile = () => {
  const [primaryColor, secondaryColor] = useCSSVariable([
    "--color-primary",
    "--color-secondary",
  ]);


  
  return (
    <Screen>
      <ScrollView
        className="flex-1"
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center mt-8 px-8">
          <View className="relative w-36">
            <View className="absolute -bottom-1.5 -left-1.5 w-full aspect-3/4 bg-green-800 rounded-3xl -rotate-1" />
            <View className="w-full aspect-[3/4] over-flow-hidden rounded-2xl z-10">
              <Image
                source={{ uri: userData.avatar }}
                className="w-full h-full rounded-2xl"
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
        <Text variant="title" className="text-green-800 text-center my-4">
          {userData.username}
        </Text>

        <View className="px-6 mt-8 pb-4">
          <View className="relative">
            <View className="absolute -top-3 left-8 flex-row items-end gap-1 z-10">
              <View className="size-4 rounded-full bg-green-800"></View>
              <View className="size-5 rounded-full bg-green-800"></View>
            </View>
            <View className="absolute top-1 left-0 right-0 -bottom-2 rounded-3xl">
              <View className="bg-green-800 py-10 px-5 rounded-3xl ">
                <View className="flex-row items-center gap-4">
                  <View className="w-12 h-12 rounded-full bg-white/20 items-center justify-center">
                    <Ionicons
                      name="chatbubble-outline"
                      size={26}
                      color={"white"}
                    />
                  </View>
                  <Text className="text-white">{userData.plantLoveLabel}</Text>
                  <Text className="text-white">{userData.plantLoveValue}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="px-6 mt-24 gap-5">
          <View className="flex-row items-center gap-4">
            <MaterialCommunityIcons
              name="flower-tulip"
              className="text-green-800"
              size={28}
              color={primaryColor as string}
            />
            <Text variant="title" className="text-green-800">
              {userData.plantsOwned}`s plants
            </Text>
          </View>
        </View>
        <View className="px-6 mt-4 gap-5">
          <View className="flex-row items-center gap-4">
            <MaterialCommunityIcons
              name="flower-tulip"
              className="text-green-800"
              size={28}
              color={primaryColor as string}
            />
            <Text variant="title" className="text-green-800">
              {userData.plantsWatered} Watered
            </Text>
          </View>
        </View>
      </ScrollView>

      <View className="px-6 pb-6 pt-12">
        <Pressable className="flex-row items-center justify-center gap-3 bg-green-800 py-4 px-6 rounded-full">
          <Text variant="button">Edit Profile</Text>
        </Pressable>
      </View>
    </Screen>
  );
};

export default Profile;
