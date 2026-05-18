import { Button, FlatList, Pressable, Text, TouchableOpacity, View } from 'react-native';
import ImageWithSquircle from '../image-with-squircle';
import { BlurView } from 'expo-blur';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

type DiscoveryProps = {
  properties: Property[];
};

const Discovery = ({ properties }: DiscoveryProps) => {
  return (
    <View>
      <Pressable
        onPress={() => router.push('/search')}
        className="mx-4 flex flex-row items-center rounded-xl bg-gray-100 p-3">
        <Ionicons name="search" size={24} color={'gray'} />
        <View className="mx-4 ">
          <Text className="text-gray-500">여행가고 싶은곳이 있으신가요?</Text>
        </View>
      </Pressable>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={properties}
        renderItem={({ item }) => (
          <View className="mx-2 rounded-2xl" style={{ width: 200, height: 200, borderRadius: 24 }}>
            <ImageWithSquircle image={item.images[1]} width={196} height={224} borderRadius={24} />
            <View
              style={{
                position: 'absolute',
                bottom: 15,
                left: 24,
                right: 24,
                borderRadius: 24,
                overflow: 'hidden',
              }}>
              <BlurView intensity={30} tint="dark">
                <Pressable
                  onPress={() => {
                    router.navigate({
                      pathname: '/properties/[id]',
                      params: {
                        id: item.id,
                      },
                    });
                  }}
                  className="flex flex-row items-center justify-between p-4">
                  <View>
                    <Text variant="caption" className="text-white">
                      {item.name}
                    </Text>
                    <Text variant="caption" className="text-white">
                      {item.price_per_night} $
                    </Text>
                  </View>
                  <Ionicons name="arrow-forward-outline" size={16} color={'white'} />
                </Pressable>
              </BlurView>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Discovery;
