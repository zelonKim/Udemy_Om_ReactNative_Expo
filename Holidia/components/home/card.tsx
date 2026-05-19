import { Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import Text from '../text';
import CarouselItem from './carousel-item';
import { router } from 'expo-router';
import { useToggleFavorite } from '@/core/hooks/use-toggle-favorite';

type CardProps = {
  property: Property;
};

const Card = ({ property }: CardProps) => {
  const toggleFavorite = useToggleFavorite();

  const onToggleHandler = () => {
    toggleFavorite.mutate({
      propertyId: property.id,
      currentFavoriteStatus: property.is_favorite,
    });
  };

  return (
    <View className="border-b border-gray-200 p-4">
      <View className="relative">
        <Pressable
          onPress={() => {
            router.push({
              pathname: '/properties/[id]',
              params: {
                id: property.id,
              },
            });
          }}>
          <CarouselItem property={property} />
        </Pressable>

        <View className="">
          <BlurView
            intensity={10}
            className="absolute bottom-4 left-8 flex flex-row overflow-hidden rounded-2xl p-2">
            <Ionicons name="star" size={24} color={'#facc15'} />
            <Text variant="body" className="mx-2 text-white">
              5
            </Text>
          </BlurView>

          <Pressable className="absolute bottom-4 right-8" onPress={onToggleHandler}>
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
