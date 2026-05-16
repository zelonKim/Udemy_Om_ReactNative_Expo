import { Pressable, View } from 'react-native';
import Image from '../image';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import Text from '../text';
import CarouselItem from './carousel-item';

type CardProps = {
  property: Property;
};

const Card = ({ property }: CardProps) => {
  return (
    <View className="border-b border-gray-200 p-4">
      <View className="relative">
        <View>
          <CarouselItem property={property} />
        </View>

        <View className="">
          <BlurView
            intensity={10}
            className="absolute bottom-4 left-8 flex flex-row overflow-hidden rounded-2xl p-2">
            <Ionicons name="star" size={24} color={'#facc15'} />
            <Text variant="body" className="mx-2 text-white">
              5
            </Text>
          </BlurView>

          <Pressable className="absolute bottom-4 right-8">
            <BlurView className="overflow-hidden rounded-2xl p-2">
              <Ionicons
                name={property.is_favorite ? 'heart' : 'heart-outline'}
                size={24}
                color={'white'}
              />
            </BlurView>
          </Pressable>
        </View>

        <View className="px-2">
          <View className="flex flex-row items-center justify-between py-2">
            <View>
              <Text variant="subtitle">{property.name}</Text>
              <Text variant="caption" className="text-gray-500">
                {property.amenities}
              </Text>
            </View>
            <View>
              <Text variant="caption">{property.country} </Text>
              <Text variant="caption">{property.price_per_night} $</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
