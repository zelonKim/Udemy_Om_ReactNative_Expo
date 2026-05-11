import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import { twMerge } from "tailwind-merge";
import Text from "~/components/ui/text";


const getRotation = (index: number) => {
  const rotations = [-4, 3, -2, 5, -3, 2, -5, 4];
  return rotations[index % rotations.length];
};


const getOffset = (index: number) => {
  const offsets = [-50, 60, -40, 70, -55, 50, -35, 65];
  return offsets[index % offsets.length];
};




const NoteCard = ({ note, index }: { note: Note; index: number }) => {
  const rotation = getRotation(index);
  const offsetX = getOffset(index);

  return (
    <Link href={{ pathname: "/note/[id]", params: { id: note.id } }} asChild>
      <Pressable
        className={twMerge("-mb-[60px] self-center")}
        style={{
          marginLeft: offsetX,
          transform: [{ rotate: `${rotation}deg` }],
          zIndex: index,
        }}
      >
        <View cornerSmoothing={1} className="h-80 w-60 rounded-3xl bg-white p-5">
          <View className="absolute right-4 top-4">
            <Ionicons name="ellipsis-horizontal" size={18} color="black" />
          </View>

          <Text variant="subtitle" className="mb-2 mr-10 text-black" numberOfLines={2}>
            {note.title}
          </Text>

          <Text variant="note" className="opacity-90 text-lg" numberOfLines={6}>
            {note.content}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default NoteCard;
