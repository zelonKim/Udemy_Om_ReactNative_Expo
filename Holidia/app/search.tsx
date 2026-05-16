import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, TextInput, View } from 'react-native';
import Container from '@/components/Container';
import Header from '@/components/header';
import { PROPERTIES } from '@/core/constants/data';
import { useState } from 'react';
import Card from '@/components/search/card';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <Header title="Search" />

      <View className="mx-4 flex flex-row items-center justify-center rounded-2xl bg-gray-100 px-4 py-2">
        <View className="flex flex-row items-center justify-center py-1">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            className="ml-2 flex-1"
            placeholder="Search by city..."
            returnKeyType="search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <FlatList
        data={PROPERTIES}
        renderItem={({ item }) => <Card property={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Search;
