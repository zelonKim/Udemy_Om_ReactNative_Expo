import { Alert, ScrollView, TouchableOpacity, View } from 'react-native';
import Text from '@/components/text';
import Container from '@/components/Container';
import useShoppingCartStore from '@/core/store';
import Header from '@/components/header';
import ImageWithSquircle from '@/components/image-with-squircle';
import Ionicons from '@expo/vector-icons/Ionicons';
import { format } from 'date-fns';
import { PRIMARY } from '@/core/theme/colors';
import { useStripe } from '@stripe/stripe-react-native';
import { client } from '@/core/api/client';
import { router } from 'expo-router';

interface BookingRequest {
  property_id: string;
  check_in: string | Date;
  check_out: string | Date;
  guest_count: number;
  special_requests: string;
}

const formattedDate = (date: Date): string => {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss'Z'");
};

const Checkout = () => {
  const { item, getTotalPrice } = useShoppingCartStore();

  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  if (!item) {
    return (
      <View className=" flex flex-1 flex-row items-center justify-center">
        <Text variant="body" className="text-center">
          Cart is Empty
        </Text>
      </View>
    );
  }

  const onSubmit = async () => {
    try {
      if (!item) return;
      const bookingData: BookingRequest = {
        property_id: item.product,
        check_in: formattedDate(item.startDate as Date),
        check_out: formattedDate(item.endDate as Date),
        guest_count: 1,
        special_requests: '',
      };
      const response = await client.post<{
        customerId: string;
        bookingId: string;
        ephemeralKey: string;
        clientSecret: string;
        paymentIntent: string;
      }>('/bookings/', bookingData);

      const { error: initError } = await initPaymentSheet({
        merchantDisplayName: 'holidia',
        customerId: response.data.customerId,
        customerEphemeralKeySecret: response.data.ephemeralKey,
        paymentIntentClientSecret: response.data.paymentIntent,
        allowsDelayedPaymentMethods: true,
        returnURL: 'holidia://checkout',
      });
      if (initError) {
        Alert.alert('결제 실패', '결제 도중 에러가 발생했습니다.');
      }

      const { error: presentError } = await presentPaymentSheet();
      if (presentError) {
        Alert.alert('결제 실패', '결제 도중 에러가 발생했습니다.');
      } else {
        Alert.alert('결제 성공', '정상적으로 결제가 완료되었습니다.');
        router.push('/payment-successful');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <ScrollView className="flex-1">
        <View className="px-4">
          <Header title="체크 아웃" />
          <View
            style={{
              overflow: 'hidden',
              backgroundColor: '#f3f4f6',
              padding: 16,
            }}
            className="flex flex-row">
            <ImageWithSquircle image={item.image} width={96} height={96} borderRadius={24} />

            <View className="ml-4 flex-1">
              <Text variant="body" className="">
                Property
              </Text>
              <Text variant="body" className="">
                {item.name}
              </Text>
            </View>
          </View>
          <View
            className="my-4 bg-white"
            style={{ padding: 16, overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
            <Text variant="subtitle">Your Trip</Text>
            <View className="mb-4">
              <Text variant="body" className="mb-2">
                Dates
              </Text>
              <View className="flex flex-row items-center ">
                <Ionicons name="calendar-outline" size={20} className="mr-2" />
                <Text variant="body">
                  {format(new Date(item.startDate), 'EEE, MMM d')} {' -  '}
                  {format(new Date(item.endDate), 'EEE, MMM d, yyyy')}
                </Text>
              </View>
            </View>
          </View>

          <View
            className="my-4 flex items-start bg-white"
            style={{ padding: 16, overflow: 'hidden', backgroundColor: '#f3f4f6' }}>
            <Text variant="subtitle" className="">
              Price details
            </Text>
            <View className="">
              <View className="flex flex-row items-center justify-between">
                <Text variant="body" className="">
                  {item.price_per_night} $ x {item.days} nights
                </Text>
                <Text variant="body" className="">
                  {' '}
                  {getTotalPrice()} $
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text variant="body" className=" ">
                Cleaning Fee{' '}
              </Text>
              <Text variant="body" className="">
                Free
              </Text>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text variant="body" className="">
                Service Fee{' '}
              </Text>
              <Text variant="body" className="">
                Free
              </Text>
            </View>
            <View className="my-4  bg-gray-200">
              <View className="flex flex-row items-center justify-between">
                <Text variant="body" className="text-center">
                  Total (USD)
                </Text>
                <Text variant="body" className="text-center">
                  {getTotalPrice().toFixed(2)} $
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={onSubmit}
        style={{
          backgroundColor: PRIMARY,
          borderRadius: 24,
          position: 'absolute',
          left: 0,
          bottom: 48,
          right: 0,
          marginHorizontal: 16,
          paddingVertical: 16,
        }}>
        <Text variant="button" className="text-center">
          결제하기
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Checkout;
