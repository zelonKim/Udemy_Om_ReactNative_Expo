import { DEFAULT_ICON_SIZE } from '@/core/constants';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type NoteProps = {
  item: Note;
};

const Note = ({ item }: NoteProps) => {
  return (
    <View style={styles.container}>
      <View className="flex w-full flex-row items-center justify-between px-10">
        <Text className="text-2xl">{item.title}</Text>
        <Ionicons name="ellipsis-vertical" size={DEFAULT_ICON_SIZE} color={'black'} />
      </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF9F0',
    paddingVertical: 24,
  },
});
