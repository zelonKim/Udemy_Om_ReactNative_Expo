import { router, Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, TextInput, View } from "react-native";
import BackButton from "~/components/ui/back-button";
import Screen from "~/components/ui/screen";
import Text from "~/components/ui/text";
import { getNoteById } from "~/lib/constants";

const EditNoteScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const note = getNoteById(id);

  const [title, setTitle] = useState(note?.title);
  const [content, setContent] = useState(note?.content);

  const handleSave = () => {
    router.back();
  };

  if (!note) return null;

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-row items-center justify-between px-5 pb-4 pt-2">
        <BackButton icon="close" />
        <Text>Edit Note</Text>
        <Pressable 
            onPress={handleSave}>
          <View
            className="px-5 py-2.5 rounded-xl bg-black/80"
            cornerSmoothing={1}
          >
            <Text variant="button" className="text-white">
              Save
            </Text>
          </View>
        </Pressable>
      </View>

      <ScrollView contentContainerClassName="px-5 pb-8">
        <View className="mb-5">
          <Text className="mb-2 text-sm font-medium">Title</Text>
          <View
            cornerSmoothing={1}
            className="bg-white px-5 rounded-2xl py-4 min-h-80"
          >
            <TextInput
              placeholder="Enter note title"
              placeholderTextColor={"gray"}
              className="text-xl"
              multiline
              value={title}
              onChangeText={setTitle}
            ></TextInput>
          </View>
        </View>

        <View className="mb-5">
          <Text className="mb-2 text-sm font-medium">Content</Text>
          <View
            cornerSmoothing={1}
            className="bg-white px-5 rounded-2xl py-4 min-h-80"
          >
            <TextInput
              placeholder="Enter note title"
              placeholderTextColor={"gray"}
              className="text-xl"
              multiline
              value={content}
              onChangeText={setContent}
            ></TextInput>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default EditNoteScreen;
