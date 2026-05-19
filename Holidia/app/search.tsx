import Ionicons from '@expo/vector-icons/Ionicons';
import { ActivityIndicator, FlatList, TextInput, View } from 'react-native';
import Container from '@/components/Container';
import Header from '@/components/header';
import { useState } from 'react';
import { useDebounce } from '@uidotdev/usehooks';
import Card from '@/components/search/card';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/core/api/client';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const { data: properties, isLoading } = useQuery({
    queryKey: ['properties-search', debouncedSearchQuery],
    queryFn: async () => {
      if (debouncedSearchQuery) {
        const { data } = await client.get(`properties/search?city=${debouncedSearchQuery}`);
        return data.properties;
      } else {
        return [];
      }
    },
    staleTime: 1000 * 60,
  });

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
        data={properties}
        renderItem={({ item }) => <Card property={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
      />
    </Container>
  );
};

export default Search;
