import Ionicons from '@expo/vector-icons/Ionicons';
import { ActivityIndicator, View } from 'react-native';
import Container from '@/components/Container';
import Header from '@/components/header';
import ImageWithSquircle from '@/components/image-with-squircle';
import Text from '@/components/text';
import { PRIMARY } from '@/core/theme/colors';
import {  useFocusEffect } from 'expo-router';
import useAuth from '@/core/auth';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/core/api/client';
import { useCallback } from 'react';

type UserState = {
  name: string;
  email: string;
  favoritePropertiesCount: number;
  bookingsCount: number;
  image: string;
};

const Profile = () => {
  const { signOut, user } = useAuth();

  const { data, isLoading, refetch } = useQuery<UserState>({
    queryKey: ['stats'],
    queryFn: async () => {
      const response = await client.get('users/stats');
      return response.data.stats;
    },
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <Header
        title="Profile"
        headerAction={{
          name: 'log-out',
          onPress: () => {
            signOut();
          },
        }}
      />

      {!data ? (
        <>
          <Container>
            <View>
              <Text>No Data</Text>
            </View>
          </Container>
        </>
      ) : !user ? (
        <>
          <Container>
            <View>
              <Text>Please Signup and Login</Text>
            </View>
          </Container>
        </>
      ) : (
        <>
          <View className="flex flex-row items-center justify-center ">
            <ImageWithSquircle
              image={data?.image || 'https://images.unsplash.com/photo-1604076850742-4c7221f3101b'}
              width={256}
              height={256}
              borderRadius={48}
            />
          </View>

          <View className="mt-4 flex items-center">
            <Text variant="subtitle" className="text-center">
              {data?.name}
            </Text>
            <Text variant="body" className="mt-2 text-center">
              {data?.email}
            </Text>
          </View>

          <View className="m-4 mt-10 flex flex-row flex-wrap justify-around">
            <View>
              <View className="flex flex-row items-center justify-center rounded-xl bg-gray-100 p-8">
                <Ionicons name="stats-chart" color={PRIMARY} size={40} />
              </View>
              <View className="mt-4 flex flex-row items-center justify-center">
                <Text variant="body" className="text-center">
                  Booking
                </Text>
                <Text variant="body" className="mx-4 text-center">
                  {data.bookingsCount}
                </Text>
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
                <Text variant="body" className="mx-4 text-center">
                  {data.favoritePropertiesCount}
                </Text>
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
                <Text variant="body" className="mx-4 text-center"></Text>
              </View>
            </View>
          </View>
        </>
      )}
    </Container>
  );
};

export default Profile;
