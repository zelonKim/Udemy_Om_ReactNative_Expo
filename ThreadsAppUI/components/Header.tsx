import { Feather, Ionicons } from '@expo/vector-icons';
import { Image, Text, TextInput, View } from 'react-native';
import { COLORS } from '@/core/theme/colors';

const Header = () => {
  return (
    <>
      <View className="flex flex-row justify-center p-4">
        <View>
          <Image
            source={require('core/assets/threads-logo.png')}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </View>
      </View>

      <View className="p-4">
        <View className="flex flex-row">
          <View>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dbspz5tmg/image/upload/v1733036926/Lauterbrunnen_Photo_v0lvtp.jpg',
              }}
              width={32}
              height={32}
              borderRadius={16}
            />
          </View>

          <View className="px-2">
            <Text>Thread</Text>
            <TextInput placeholder="What's new?" focusable={false} />
            <View className="mt-2 flex flex-row">
              <View className="mr-1 p-1">
                <Ionicons name="images-outline" size={16} color={COLORS.iconGray} />
              </View>
              <View className="mr-1 p-1">
                <Ionicons name="camera" size={16} color={COLORS.iconGray} />
              </View>
              <View className="mr-1 p-1">
                <Ionicons name="mic" size={16} color={COLORS.iconGray} />
              </View>
              <View className="mr-1 p-1">
                <Feather name="hash" size={16} color={COLORS.iconGray} />
              </View>
              <View className="mr-1 p-1">
                <Feather name="menu" size={16} color={COLORS.iconGray} />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="h-[0.5] w-full bg-gray-200" />
    </>
  );
};

export default Header;
