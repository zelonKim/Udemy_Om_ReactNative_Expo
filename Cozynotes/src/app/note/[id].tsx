import { Ionicons } from "@expo/vector-icons";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import BackButton from "~/components/ui/back-button";
import Screen from "~/components/ui/screen";
import Text from "~/components/ui/text";
import { getNoteById } from "~/lib/constants";

const NoteDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const note = getNoteById(id);

  if (!note) return null;

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-row items-center justify-between px-5 pb-5 pt-5">
        <BackButton />

        <Link
          href={{
            pathname: "/note/edit",
            params: {
                id: id
            }
          }}
          asChild
        >
          <Pressable>
            <Ionicons name="pencil" size={24} color={"black"} />
          </Pressable>
        </Link>
      </View>

      <ScrollView className="px-5 pb-8">
        <View cornerSmoothing={1} className="bg-white p-6 rounded-3xl">
          <Text>Note. {id} </Text>
          <Text variant="title" className="mb-4">
            {note?.title}
          </Text>
          <Text variant="note">{note?.content}</Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default NoteDetailScreen;
