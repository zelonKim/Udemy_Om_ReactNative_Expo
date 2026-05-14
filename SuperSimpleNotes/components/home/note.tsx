import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, View } from 'react-native';
import { Menu, Button } from 'react-native-paper';
import { useState } from 'react';
import { router } from 'expo-router';
import useNotesStore from '@/store/store';
import { toast } from '@/lib/toast';

type NoteProps = {
  item: Note;
};

const Note = ({ item }: NoteProps) => {
  const [visible, setVisible] = useState(false);

  const { deleteNote } = useNotesStore();

  return (
    <View style={styles.container}>
      <View className="flex w-full flex-row items-center justify-between px-10 ">
        <Text className="text-2xl">{item.title}</Text>
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <Button onPress={() => setVisible(true)}>
              <Ionicons name="ellipsis-vertical" size={22} color={'black'} />
            </Button>
          }>
          <Menu.Item
            onPress={() => {
              router.push({ pathname: '/details', params: { noteId: item.id } });
            }}
            title="수정"
            leadingIcon="pencil"
          />
          <Menu.Item
            onPress={() => {
              deleteNote(item.id);
              toast.error('성공적으로 삭제되었습니다.');
            }}
            title="삭제"
            leadingIcon="delete"
          />
        </Menu>
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
