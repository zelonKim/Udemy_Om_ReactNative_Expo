import BookingItem from '@/components/bookings/booking-item';
import Container from '@/components/Container';
import Header from '@/components/header';
import { BOOKINGS } from '@/core/constants/data';
import { FlatList, Text, View } from 'react-native';

export default function Bookings() {
  return (
    <Container>
      <Header title="Bookings" />
      <FlatList
        data={BOOKINGS}
        renderItem={({ item }) => <BookingItem booking={item} />}
        keyExtractor={(item) => item.id}
        className="h-full"
        ItemSeparatorComponent={() => <View className="h-6"></View>}
      />
    </Container>
  );
}
