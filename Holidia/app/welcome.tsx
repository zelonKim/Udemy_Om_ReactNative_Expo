import { Image, Pressable, TouchableOpacity, View } from 'react-native';
import Text from '@/components/text';
import Container from '@/components/Container';
import Header from '@/components/header';
import { PRIMARY } from '@/core/theme/colors';
import { router } from 'expo-router';

const Welcome = () => {
  return (
    <Container>
      <View className="mb-5 flex  flex-1 items-center justify-center gap-2 px-4">
        <View className="flex flex-1 flex-row items-center justify-center">
          <Image source={require('assets/logo.png')} style={{ height: 40, width: 176 }} />
        </View>
        
        <TouchableOpacity
          onPress={() => {
            router.push('/signup');
          }}
          style={{ backgroundColor: PRIMARY, paddingVertical: 16, marginTop: 16, borderRadius: 16 }}
          className="w-full items-center">
          <Text variant="button" className="text-center">
            Sign up for free
          </Text>
        </TouchableOpacity>

        <View className="flex flex-row gap-1">
          <Text variant="body" className="mt-2 text-center text-gray-800">
            Already signed up?
          </Text>

          <TouchableOpacity
            onPress={() => {
              router.push('/login');
            }}>
            <Text variant="body" className="mt-2 text-center font-bold text-primary">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Welcome;
