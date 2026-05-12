import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import { Pressable, TextInput, View } from "react-native";
import { useCSSVariable } from "uniwind";
import { Screen } from "~/components/ui/screen";
import Text from "~/components/ui/text";
import useAuth from "~/lib/stores/auth";

export default function SignUp() {
  const [colorPrimary, mutedForeground] = useCSSVariable([
    "--color-primary",
    "--color-muted-foreground",
  ]);

  const { login } = useAuth();

  return (
    <Screen>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 px-6 py-4">
        <Pressable
          onPress={() => {
            router.back();
          }}
          className="mb-8"
        >
          <Ionicons
            name="chevron-back"
            size={28}
            color={colorPrimary as string}
          />
        </Pressable>
        <Text variant="display" className="text-primary">
          Sign Up
        </Text>
        <View className="mb-10">
          <Text variant="display" className="text-green-800 mb-2 text-xl mt-2">
            Create account
          </Text>
          <Text>Start your plant care today</Text>
        </View>
        <View className="gap-5">
          <View className="gpa-2">
            <Text className="text-primary font-medium">Name</Text>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor={mutedForeground as string}
              className="bg-muted/50 px-5 py-4 rounded-2xl text-foreground text-base"
            />
          </View>

          <View className="gap-5">
            <View className="gpa-2">
              <Text className="text-primary font-medium">Email</Text>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={mutedForeground as string}
                className="bg-muted/50 px-5 py-4 rounded-2xl text-foreground text-base"
              />
            </View>
          </View>
          <View className="gap-5">
            <View className="gpa-2">
              <Text className="text-primary font-medium">Password</Text>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={mutedForeground as string}
                className="bg-muted/50 px-5 py-4 rounded-2xl text-foreground text-base"
                secureTextEntry
              />
            </View>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          onPress={login}
          className="bg-green-800 py-4 px-6 rounded-2xl"
        >
          <Text variant="button">회원가입</Text>
        </Pressable>
        <View>
          <View className="mt-6 items-center">
            <Pressable
              onPress={() => {
                router.push("/(auth)/sign-in");
              }}
            >
              <Text>
                이미 계정이 있으신가요?{"  "}
                <Text className="text-primary font-semibold">로그인</Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Screen>
  );
}
