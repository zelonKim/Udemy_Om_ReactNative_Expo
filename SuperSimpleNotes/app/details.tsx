import { DEFAULT_ICON_SIZE } from '@/core/constants';
import { COLORS } from '@/core/theme/colors';
import { toast } from '@/lib/toast';
import useNotesStore from '@/store/store';
import { Ionicons } from '@expo/vector-icons';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Details() {
  const { noteId } = useLocalSearchParams();

  const { getNote, updateNote } = useNotesStore();

  const note = getNote(noteId as string);

  const [noteText, setNoteText] = useState(note?.title ?? '');

  const navigateBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Details', headerShown: false }} />
      <KeyboardAvoidingView style={styles.keyboardAvoidingViewController} behavior="padding">
        <View className="flex-1 p-6">
          <TouchableOpacity onPress={navigateBack}>
            <Ionicons name="arrow-back" size={DEFAULT_ICON_SIZE} />
          </TouchableOpacity>

          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Edit Note"
              className=" p-4 text-xl"
              autoFocus
              onChangeText={setNoteText}
              value={noteText}
            />
          </View>

          <View className="absolute bottom-20 right-10">
            <TouchableOpacity
              style={styles.updateButton}
              onPress={() => {
                if (note) {
                  updateNote(note.id, noteText);
                }
                toast.success('성공적으로 업데이트 되었습니다.');
                navigateBack();
              }}>
              <Ionicons name="checkmark" color={'white'} size={DEFAULT_ICON_SIZE} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingViewController: {
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: '#F4F4F4',
    marginTop: 16,
    borderRadius: 24,
  },
  updateButton: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
  },
});
