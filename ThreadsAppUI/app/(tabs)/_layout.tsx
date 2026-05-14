import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { TabBarIcon } from '../../components/TabBarIcon';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={size} />,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIconStyle: {
            backgroundColor: '#f1f5f9',
            borderRadius: 16,
            width: 48,
            marginTop: 4,
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '검색',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="search" color={color} size={size} />,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIconStyle: {
            backgroundColor: '#f1f5f9',
            borderRadius: 16,
            width: 48,
            marginTop: 4,
          },
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: '추가',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="plus" color={color} size={size} />,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIconStyle: {
            backgroundColor: '#f1f5f9',
            borderRadius: 16,
            width: 48,
            marginTop: 4,
          },
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: '공지',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="bell" color={color} size={size} />,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIconStyle: {
            backgroundColor: '#f1f5f9',
            borderRadius: 16,
            width: 48,
            marginTop: 4,
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: '프로필',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="user" color={color} size={size} />,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIconStyle: {
            backgroundColor: '#f1f5f9',
            borderRadius: 16,
            width: 48,
            marginTop: 4,
          },
        }}
      />
    </Tabs>
  );
}
