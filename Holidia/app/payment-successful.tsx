import { TouchableOpacity, View } from 'react-native';
import Text from '@/components/text';
import Container from '@/components/Container';
import { router } from 'expo-router';
import { MotiView } from 'moti';
import Ionicons from '@expo/vector-icons/Ionicons';

const PaymentSuccessful = () => {
  return (
    <Container>
      <View className="flex-1 items-center justify-center p-5">
        <MotiView
          from={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            duration: 2000,
            scale: {
              damping: 12,
              stiffness: 100,
            },
          }}>
          <View className="flex h-24 w-24 flex-row items-center justify-center rounded-full bg-green-100">
            <View className="h-20 w-20 items-center justify-center rounded-full bg-green-600">
              <Ionicons name="checkmark" size={40} color={'white'} />
            </View>
          </View>
        </MotiView>

        <Text variant="display" className="my-4 text-center">
          Paid Successfully
        </Text>
        <Text variant="body" className="my-4 mb-10 text-center text-gray-600">
          Your booking has been confirmed.
        </Text>

        <View className="flex flex-row items-center justify-center">
          <TouchableOpacity
            onPress={() => {
              router.push('/(tabs)/bookings');
            }}
            style={{ backgroundColor: 'green', paddingVertical: 16, borderRadius: 16 }}
            className="w-full">
            <Text variant="button" className="text-center">
              View my Bookings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default PaymentSuccessful;
