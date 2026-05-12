import IonIcons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useCSSVariable } from "uniwind";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof IonIcons>["name"];
  color: string;
}) {
  return <IonIcons size={28} style={{ marginBottom: -4 }} {...props} />;
}

export default function TabLayout() {
  const backgroundColor = useCSSVariable("--color-muted") as string;
  const primaryColor = useCSSVariable("--color-primary") as string;
  const tabBarActiveTintColor = useCSSVariable(
    "--color-muted-foreground",
  ) as string;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: tabBarActiveTintColor,
        tabBarStyle: {
          backgroundColor,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="partly-sunny" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="grid" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
