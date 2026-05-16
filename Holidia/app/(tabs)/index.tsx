import Text from '@/components/text';
import { FlatList, View } from 'react-native';
import { PROPERTIES } from '@/core/constants/data';
import Card from '@/components/home/card';
import Container from '@/components/Container';
import Discovery from '@/components/home/discovery';
import MainHeader from '@/components/home/main-header';
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Home() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/welcome');
  //   }, 3000);
  // }, []);

  return (
    <Container>
      <MainHeader />
      <FlatList
        data={PROPERTIES}
        renderItem={({ item }) => <Card property={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Discovery properties={PROPERTIES} />}
      />
    </Container>
  );
}
