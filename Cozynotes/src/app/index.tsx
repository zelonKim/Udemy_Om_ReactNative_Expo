import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import NoteCard from "~/components/screens/home/note-card";
import Screen from "~/components/ui/screen";
import Text from "~/components/ui/text";
import { NOTES } from "~/lib/constants";
import { BACKGROUND_IMAGE } from "~/lib/constants";


export default function HomeScreen() {
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <ImageBackground
        source={{ uri: BACKGROUND_IMAGE }}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />
      
      
      <View className="flex-row items-center justify-between px-6 pb-4 pt-2">
        <View>
          <Text variant="note">Cozy Note</Text>
        </View>

        <Link href={"/settings"} asChild>
          <Pressable>
            <View
              cornerSmoothing={1}
              className="size-10 items-center justify-center bg-white rounded-md"
            >
              <Ionicons name="settings-outline" size={24} color={"black"} />
            </View>
          </Pressable>
        </Link>
      </View>


      <FlatList
        data={NOTES}
        renderItem={({ item, index }) => <NoteCard note={item} index={index} />}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-6 pt-4 pb-60"
      />


      <Link 
        href={"/note/new"} 
        asChild
        cornerSmoothing={1}
        className="absolute bottom-10 right-10">
        <Pressable>
          <View className="bg-black/80 size-14 items-center justify-center rounded-2xl">
            <Ionicons name="add" size={24} color={"white"} />
          </View>
        </Pressable>
      </Link>

    </Screen>
  );
}
