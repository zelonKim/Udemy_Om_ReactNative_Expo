import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';
import Container from '@/components/Container';
import Header from '@/components/header';
import ImageWithSquircle from '@/components/image-with-squircle';
import Text from '@/components/text';
import { PRIMARY } from '@/core/theme/colors';
import { router } from 'expo-router';

const user = {
  email: 'ksz1860@naver.com',
  username: 'zelonKim',
  avatar: 'https://avatars.githubusercontent.com/u/132578096?v=4',
};

const Profile = () => {
  return (
    <Container>
      <Header
        title="Profile"
        headerAction={{
          name: 'log-out',
          onPress: () => {
            router.push('/welcome');
          },
        }}
      />

      <View className="flex flex-row items-center justify-center ">
        <ImageWithSquircle image={user.avatar} width={256} height={256} borderRadius={48} />
      </View>

      <View className="mt-4 flex items-center">
        <Text variant="subtitle" className="text-center">
          {user.email}
        </Text>
        <Text variant="subtitle" className="text-center">
          @{user.username}
        </Text>
      </View>

      <View className="m-4 mt-10 flex flex-row flex-wrap justify-around">
        <View>
          <View className="flex flex-row items-center justify-center rounded-xl bg-gray-100 p-8">
            <Ionicons name="stats-chart" color={PRIMARY} size={40} />
          </View>
          <View className="mt-4 flex flex-row items-center justify-center">
            <Text variant="body" className="text-center">
              Trips
            </Text>
            <Text variant="body" className="mx-4 text-center"></Text>
          </View>
        </View>

        <View>
          <View className="flex flex-row items-center justify-center rounded-xl bg-gray-100 p-8">
            <Ionicons name="heart" color={PRIMARY} size={40} />
          </View>
          <View className="mt-4 flex flex-row items-center justify-center">
            <Text variant="body" className="text-center">
              Favorite
            </Text>
            <Text variant="body" className="mx-4 text-center"></Text>
          </View>
        </View>

        <View>
          <View className="flex flex-row items-center justify-center rounded-xl bg-gray-100 p-8">
            <Ionicons name="albums" color={PRIMARY} size={40} />
          </View>
          <View className="mt-4 flex flex-row items-center justify-center">
            <Text variant="body" className="text-center">
              Albums
            </Text>
            <Text variant="body" className="mx-4 text-center">
              2
            </Text>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Profile;
