import { Stack } from 'expo-router';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Header from '@/components/home/header';
import Separator from '@/components/separator';
import Note from '@/components/home/note';
import AddNoteModal from '@/components/modal';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/core/theme/colors';
import useNotesStore from '@/store/store';



const Home = () => {
  const { notes } = useNotesStore();

  const [isModalVisible, setIsModalVisible] = useState(false);


  const openModal = () => {
    setIsModalVisible(true);
  };


  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />

      <View className="flex-1 p-4">
        <FlatList
          data={notes}
          renderItem={({ item }) => <Note item={item} />}
          keyExtractor={(item: Note) => item.id}
          ItemSeparatorComponent={Separator}
        />
      </View>

      <AddNoteModal visible={isModalVisible} setVisible={setIsModalVisible} />

      <TouchableOpacity style={styles.addNoteButton} onPress={openModal}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  addNoteButton: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    right: 24,
    bottom: 40,
    height: 64,
    width: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
