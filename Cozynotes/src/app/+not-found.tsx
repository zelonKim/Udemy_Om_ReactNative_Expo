import { Ionicons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import Screen from '~/components/ui/screen';



export default function NotFoundScreen() {
  return (
    <Screen>
      <Stack.Screen options={{ title: 'Not Found', headerShown: false }} />
      <View className="flex-1 items-center justify-center px-8">
        <Ionicons name="alert-circle-outline" size={80} color="black" />
        <Text className="mt-6 text-2xl font-bold text-foreground">Page Not Found</Text>
        <Text className="mt-2 text-center text-muted-foreground">
          {"The page you're looking for doesn't exist."}
        </Text>
        <Link href="/" asChild>
          <Pressable className="mt-8">
            <View
              cornerSmoothing={1}
              className="bg-primary px-6 py-3"
              style={{ borderRadius: 14 }}>
              <Text className="font-semibold text-primary-foreground">Go to Home</Text>
            </View>
          </Pressable>
        </Link>
      </View>
    </Screen>
  );
}
