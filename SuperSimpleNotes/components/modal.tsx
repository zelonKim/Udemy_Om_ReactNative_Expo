import { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '@/core/theme/colors';
import useNotesStore from '@/store/store';

type AddNoteModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};


const AddNoteModal = ({ visible, setVisible }: AddNoteModalProps) => {
  const [noteText, setNoteText] = useState('');
  const { addNote } = useNotesStore();


  const handleAddNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: noteText,
    };

    addNote(newNote);

    setNoteText('');
    setVisible(false);
  };


  const closeModal = () => {
    setVisible(false);
  };

  return (
    <Modal visible={visible} transparent={true} style={styles.modal}>
      <View
        style={[
          styles.modalContainer,
          {
            backgroundColor: 'rgba(0,0,0,0.4)',
          },
        ]}>
        <View style={[styles.modalView]} className="p-8">
          <Text className="text-primary text-2xl font-medium">New Note</Text>
          <TextInput
            placeholder="Create a Note"
            placeholderTextColor={'gray'}
            className="border-primary mt-2 rounded border-b bg-white py-4 text-xl"
            onChangeText={setNoteText}
            value={noteText}
          />

          <View className="ml-4 mt-5 flex flex-row items-center justify-between py-4">
            <TouchableOpacity style={styles.button} onPress={closeModal}>
              <Text className="text-xl text-white">Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleAddNote}>
              <Text className="text-xl text-white">Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddNoteModal;



const styles = StyleSheet.create({
  modal: {
    zIndex: 100,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 16,
    paddingTop: 24,
  },
  button: {
    backgroundColor: COLORS.primary,
    height: 48,
    width: '45%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
