import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={20} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "둘러보기",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "telescope" : "telescope-outline"}
              size={20}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "검색",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "search" : "search-outline"} size={20} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "프로필",
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={20} />
          ),
        }}
      />
    </Tabs>
  );
}
