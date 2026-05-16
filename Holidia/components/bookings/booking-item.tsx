import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/build/Ionicons';
import { BlurView } from 'expo-blur';
import Image from '../image';
import Text from '../text';
import { format } from 'date-fns';
import { useImageColors } from '@/core/hooks/use-image-color';

type Props = {
  booking: Booking;
};

const CalendarDate = ({ date = new Date() }) => {
  const month = format(date, 'MMM').toUpperCase();
  const day = format(date, 'd');
  const weekday = format(date, 'EEE');

  return (
    <View
      style={{
        backgroundColor: '#f3f4f6',
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderRadius: 16,
      }}>
      <View className="mx-1 flex flex-row items-center justify-center gap-2">
        <Text variant="caption" className="text-center">
          {month}
        </Text>

        <View className="items-center py-2">
          <Text variant="subtitle" className="text-center">
            {day}
          </Text>
        </View>

        <View className="ml-1 items-center p-1">
          <Text variant="caption" className="text-center text-gray-500">
            {weekday}
          </Text>
        </View>
      </View>
    </View>
  );
};

const BookingItem = ({ booking }: Props) => {
  const { colors } = useImageColors(booking.property.images[0]);

  return (
    <View className="mx-4 flex flex-row justify-between">
      <View
        className="flex-1"
        style={{
          overflow: 'hidden',
          borderRadius: 24,
        }}>
        <CalendarDate date={booking.check_in as unknown as Date} />

        <View style={{ overflow: 'hidden', borderBottomEndRadius: 0, borderBottomStartRadius: 0 }}>
          <View className="h-36 overflow-hidden">
            <Image source={booking.property.images[0]} style={{ height: 256 }} />
          </View>
          <View
            style={{
              padding: 24,
              position: 'relative',
              backgroundColor: colors?.background,
              overflow: 'hidden',
            }}>
            <BlurView
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              tint="dark"
              intensity={10}
            />
            <View className="flex flex-row items-center">
              <Ionicons name="location" size={16} color={'white'} />
              <Text variant="body" className="mx-2 text-white">
                {booking.property.name}, {booking.property.city}, {booking.property.country}
              </Text>
            </View>

            <View className="mt-2 flex flex-row justify-between">
              <View className="">
                <Text variant="body" className="text-white">
                  체크 인
                </Text>
                <Text variant="body" className="text-white">
                  {format(new Date(booking.check_in), 'MMM dd, yyyy')}
                </Text>
              </View>

              <View className="">
                <Text variant="body" className="text-white">
                  체크 아웃
                </Text>
                <Text variant="body" className="text-white">
                  {format(new Date(booking.check_out), 'MMM dd, yyyy')}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookingItem;
