import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { format, parseISO } from 'date-fns';
import { RefObject } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { COLORS } from '@/core/theme/colors';
import BottomSheet from '@gorhom/bottom-sheet';

type CardProps = {
  item: ThreadCardProps;
  bottomSheetRef: RefObject<BottomSheet>;
};

const Card = ({ item, bottomSheetRef }: CardProps) => {
  return (
    <View className="flex flex-row p-4">
      <View className="flex-shrink-0">
        <Image
          source={{
            uri: item.user.profilePicture,
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
        />
      </View>

      <View className="flex-1 px-2">
        <View className="flex flex-row items-center justify-between ">
          <View className="flex flex-row items-center">
            <MaterialCommunityIcons name="check-decagram" size={16} color={COLORS.blue[400]} />
            <Text className="ml-1 mr-2 font-semibold">{item.user.name}</Text>
            <Text className="text-sm text-gray-500">
              {format(parseISO(item.timestamp), 'HH:mm')}
            </Text>
          </View>
          <View>
            <Pressable
              onPress={() => {
                bottomSheetRef.current?.expand();
              }}>
              <Ionicons name="ellipsis-horizontal" size={16} color={COLORS.textGray} />
            </Pressable>
          </View>
        </View>

        <View className="mt-1">
          <Text>{item.content}</Text>
          <View className="mt-2 flex flex-row justify-between pr-12">
            <View className="flex flex-row items-center">
              <Ionicons name="heart-outline" size={20} color={COLORS.textGray} />
              <Text className="ml-1 text-xs text-gray-500">{item.likes}</Text>
            </View>
            <View className="flex flex-row items-center">
              <Ionicons name="chatbubble-outline" size={20} color={COLORS.textGray} />
              <Text className="ml-1 text-xs text-gray-500">{item.replies}</Text>
            </View>
            <View className="flex flex-row items-center">
              <Ionicons name="repeat" size={20} color={COLORS.textGray} />
              <Text className="ml-1 text-xs text-gray-500">{item.reposts}</Text>
            </View>
            <View className="flex flex-row items-center">
              <Feather name="send" size={20} color={COLORS.textGray} />
              <Text className="ml-1 text-xs text-gray-500">{item.shares}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
