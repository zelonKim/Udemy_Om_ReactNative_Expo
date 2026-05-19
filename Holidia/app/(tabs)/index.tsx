import Text from '@/components/text';
import { FlatList, View } from 'react-native';
import Card from '@/components/home/card';
import Container from '@/components/Container';
import Discovery from '@/components/home/discovery';
import MainHeader from '@/components/home/main-header';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/core/api/client';


export default function Home() {

  const { data, isLoading } = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      const { data } = await client.get('/properties');
      return data.properties;
    },
  });

  if (isLoading) {
    return (
      <Container>
        <View className="flex flex-row items-center justify-center">
          <Text variant="body" className="text-center">
            Loading..
          </Text>
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <MainHeader />
      <FlatList
        data={data}
        ListHeaderComponent={() => <Discovery properties={data} />}
        renderItem={({ item }) => <Card property={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
