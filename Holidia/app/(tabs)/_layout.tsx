import { Redirect, SplashScreen, Tabs } from 'expo-router';
import { TabBarIcon } from '../../components/TabBarIcon';
import { PRIMARY } from '@/core/theme/colors';
import useAuth from '@/core/auth';
import { useCallback, useEffect } from 'react';


export default function TabLayout() {
  const { status } = useAuth();

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (status === 'idle' || status === 'signOut') {
    return <Redirect href={'/welcome'} />;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PRIMARY,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => <TabBarIcon name="albums" color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: '좋아요',
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: '예약',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-clear" color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '프로필',
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
