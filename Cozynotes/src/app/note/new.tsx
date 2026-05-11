import { router, Stack } from "expo-router";
import { Pressable, ScrollView, TextInput, View } from "react-native";
import BackButton from "~/components/ui/back-button";
import Screen from "~/components/ui/screen";
import Text from "~/components/ui/text";

const NewNoteScreen = () => {
  
  const handleCreate = () => {
    router.back();
  };

  return (
    <Screen>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="px-5 pb-4 pt-2 flex-row items-center justify-center">
        <BackButton />
        <Text> New Note </Text>

        <Pressable onPress={handleCreate}>
          <View
            cornerSmoothing={1}
            className="bg-black/80 px-5 py-2 rounded-xl "
          >
            <Text className="text-white"> Create </Text>
          </View>
        </Pressable>
      </View>

      <ScrollView contentContainerClassName="px-5 pb-8">
        <View>
          <Text className="mb-2 text-sm font-medium">Title</Text>
          <View
            cornerSmoothing={1}
            className="bg-white px-5 py-5 rounded-2xl"
          >
            <TextInput
              placeholder="Enter the note title"
              placeholderTextColor={"gray"}
              className="text-xl"
              autoFocus
              multiline
            />
          </View>
        </View>

         <View>
          <Text className="mb-2 text-sm font-medium">Content</Text>
          <View
            cornerSmoothing={1}
            className="bg-white px-5 min-h-80 py-4 rounded-2xl"
          >
            <TextInput
              placeholder="Enter the content"
              placeholderTextColor={"gray"}
              className="text-xl"
              autoFocus
              multiline
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default NewNoteScreen;
