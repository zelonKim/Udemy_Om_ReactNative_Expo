import Container from '@/components/Container';
import Card from '@/components/favorite/card';
import Header from '@/components/header';
import { client } from '@/core/api/client';
import { useQuery } from '@tanstack/react-query';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import { ResponsiveGrid } from 'react-native-flexible-grid';

export default function Favorite() {

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => {
      const { data } = await client.get('/favorites');
      return data.favorites;
    },
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Container>
      <Header title="Favorite" />
      <ResponsiveGrid
        data={data as Property[]}
        keyExtractor={(item: Property) => item.id}
        renderItem={({ item }) => <Card property={item} />}
        maxItemsPerColumn={2}
        itemUnitHeight={256}
      />
    </Container>
  );
}
